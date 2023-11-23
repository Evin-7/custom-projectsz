const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use cors middleware to enable CORS
app.use(cors());

// Your API endpoint for handling form submissions
app.post('/submitForm', (req, res) => {
  // Extract data from the request body
  const { email, name } = req.body;

  // Send email logic (replace with your actual email sending code)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'evinleyander239@gmail.com',
      pass: '@1234JRq',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Thanks for Registration!',
    text: `Thanks for your Registration, ${name}! Your interview is scheduled on ${new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email Sent Successfully' });
    }
  });
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
