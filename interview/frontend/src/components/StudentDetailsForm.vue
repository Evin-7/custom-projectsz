<template>
  <div>
    <v-layout justify-center pt-16>
      <v-flex xs11 pt-16>
        <v-layout wrap justify-center>
          <v-flex xs4>
            <v-card class="form-card">
              <form @submit.prevent="submitForm">
                <v-layout wrap justify-center>
                  <!-- Student Name -->
                  <v-flex xs12>
                    <label for="studentName">Student Name:</label>
                    <input class="custom-input" type="text" id="studentName" v-model="studentDetails[0].name" required>
                  </v-flex>

                  <!-- Email -->
                  <v-flex xs12>
                    <label for="email">Email:</label>
                    <input class="custom-input" type="email" id="email" v-model="studentDetails[0].email" required>
                  </v-flex>

                  <!-- Phone -->
                  <v-flex xs12>
                    <label for="phone">Phone:</label>
                    <input class="custom-input" type="tel" id="phone" v-model="studentDetails[0].phone" @input="validatePhoneNumber" required>
                    <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
                  </v-flex>

                  <!-- Address -->
                  <v-flex xs12>
                    <label for="address">Address:</label>
                    <textarea class="custom-input" id="address" v-model="studentDetails[0].address" required></textarea>
                  </v-flex>

                  <!-- Percentage Obtained -->
                  <v-flex xs12>
                    <label for="percentage">Percentage Obtained:</label>
                    <input class="custom-input" type="number" id="percentage" v-model="studentDetails[0].percentage" required>
                  </v-flex>

                  <!-- Top Class -->
                  <v-flex xs2>
                    <input class="custom-input" type="checkbox" id="topClass" v-model="studentDetails[0].topClass">
                  </v-flex>

                  <!-- Submit Button -->
                  <v-flex xs10 v-if="shouldShowSubmitButton">
                    <button type="submit" class="submit-button">Submit</button>

                  </v-flex>
                </v-layout>
              </form>
            </v-card>
            <v-dialog v-model="successMessage" max-width="300">
      <v-card>
        <v-card-title class="headline">Success</v-card-title>
        <v-card-text>
          {{ successMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeSuccessMessage">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      to: 'yjevin75@gmail.com', // Add the email address where you want to receive the form submissions
      subject: 'Student Application',
      studentDetails: [
        {
          name: '',
          email: '',
          phone: '',
          address: '',
          percentage: null,
          topClass: false,
        }
      ],
      phoneError: '',
      successMessage: '',
    };
  },
  computed: {
    shouldShowSubmitButton() {
      return this.studentDetails[0].topClass;
    },
  },
  methods: {
    closeSuccessMessage() {
      this.successMessage = '';
    },
    submitForm() {
      emailjs.init("b2a_iFqgCAGz-aaiS");


      // Validate phone number again before submission
      this.validatePhoneNumber();

      // Check if there's any error
      if (this.phoneError) {
        // Show a popup or handle the error as needed
        alert(this.phoneError);

        // Assign empty value to the phone field
        this.studentDetails[0].phone = '';
        return; // Prevent form submission if there's an error
      }

      // Prepare email template parameters with form data
      const templateParams = {
        to_email: this.studentDetails.email,
        subject: this.subject,
        message_html: `
          Student Name: ${this.studentDetails[0].name}<br>
          Email: ${this.studentDetails[0].email}<br>
          Phone: ${this.studentDetails[0].phone}<br>
          Address: ${this.studentDetails[0].address}<br>
          Percentage Obtained: ${this.studentDetails[0].percentage}<br>
          Top Class: ${this.studentDetails[0].topClass ? 'Yes' : 'No'}<br>
        `,
      };

      // Configure email parameters
      const emailParams = {
        service_id: 'service_i3022nx',
  template_id: 'template_7q13dhm',
        templateParams,
      };

      // Send email using emailjs
      emailjs.send('default_service', 'template_7q13dhm', emailParams)

        .then((response) => {
          console.log('Email sent successfully:', response);
          // You can add your success handling code here

          // Show success message to the user
          this.successMessage = 'Application submitted successfully!';
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // You can add your error handling code here
        });

      // If you want to append a new object on each submission
      this.studentDetails.push({
        name: '',
        email: '',
        phone: '',
        address: '',
        percentage: null,
        topClass: false,
      });

      // Save to localStorage
      this.saveToLocalStorage();
    },
    validatePhoneNumber() {
      const phone = this.studentDetails[0].phone;
      if (phone.length !== 10) {
        this.phoneError = 'Phone number must be 10 digits.';
      } else {
        this.phoneError = '';
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('studentDetails', JSON.stringify(this.studentDetails));
    },
    retrieveFromLocalStorage() {
      const storedData = localStorage.getItem('studentDetails');
      return storedData ? JSON.parse(storedData) : null;
    },
  },
};
</script>


<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}

.form-card {
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
}

.custom-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid black;
  border-radius: 5px;
}

.submit-button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>