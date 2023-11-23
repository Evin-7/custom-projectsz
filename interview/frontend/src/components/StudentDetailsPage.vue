<!-- StudentDetailsPage.vue -->

<template>
    <div>
      <h1>Student Details Page</h1>
      
      <!-- Embed the StudentDetailsForm component -->
      <student-details-form />
    </div>
  </template>
  
  <script>
  // Import the StudentDetailsForm component
  import StudentDetailsForm from "@/components/StudentDetailsForm.vue";
  
  export default {
    components: {
      // Register the StudentDetailsForm component
      StudentDetailsForm,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles for the page */
  </style>
  