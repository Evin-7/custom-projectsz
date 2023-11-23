<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      to: 'YOUR_EMAIL_ADDRESS', // Add the email address where you want to receive the form submissions
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
        to_email: this.to,
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
