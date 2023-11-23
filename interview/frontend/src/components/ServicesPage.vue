<template>
  <div>
    <form @submit.prevent="sendEmail">
      <label for="to">To:</label>
      <input type="email" id="to" v-model="to" required>

      <label for="subject">Subject:</label>
      <input type="text" id="subject" v-model="subject" required>

      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>

      <button type="submit">Send Email</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  
  data() {
    return {
      to: 'evinleyander239@gmail.com',
      subject: 'dedede',
      message: 'xe',
    };
  },
  methods: {
  
    sendEmail() {
      emailjs.init("b2a_iFqgCAGz-aaiS");

      const templateParams = {
        to_email: this.to,
        subject: this.subject,
        message_html: this.message,
      };

      const emailParams = {
        service_id: 'service_i3022nx',
        template_id: 'template_7q13dhm',
        // user_id: 'b2a_iFqgCAGz-aaiS',
        templateParams,
      };

      emailjs.send('default_service', 'template_7q13dhm', emailParams)
        .then((response) => {
          console.log('Email sent successfully:', response);
          // You can add your success handling code here
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // You can add your error handling code here
        });
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
