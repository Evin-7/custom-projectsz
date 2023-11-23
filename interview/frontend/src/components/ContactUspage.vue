<template>
  <div class="student-details-container" v-if="studentDetails.length > 0">
    <h1>Student Details</h1>
    <v-row>
      <v-col v-for="(student, index) in studentDetails" :key="index" cols="12" md="6">
        <v-card class="student-card">
          <v-card-title>{{ student.name }}</v-card-title>
          <v-card-text>
            <strong>Email:</strong> {{ student.email }}<br>
            <strong>Phone:</strong> {{ student.phone }}<br>
            <strong>Address:</strong> {{ student.address }}<br>
            <strong>Percentage Obtained:</strong> {{ student.percentage }}<br>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <p class="no-details-message">No student details available.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentDetails: this.retrieveFromLocalStorage() || [],
    };
  },
  methods: {
    retrieveFromLocalStorage() {
      const storedData = localStorage.getItem('studentDetails');
      return storedData ? JSON.parse(storedData) : null;
    },
    updateTopClass() {
      this.studentDetails.forEach(student => {
        if (student.percentage > 90) {
          student.topClass = true;
        } else {
          student.topClass = false;
        }
      });

      // Save updated details to localStorage
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('studentDetails', JSON.stringify(this.studentDetails));
    },
  },
  mounted() {
    // Call the method when the component is mounted (you can trigger it based on your specific use case)
    this.updateTopClass();
  },
};
</script>

<style scoped>
.student-details-container {
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  margin-top: 20px;
}

.no-details-message {
  font-size: 18px;
  color: #888;
}

.student-card {
  margin-bottom: 20px;
}
</style>
