const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Import Nodemailer
const app = express();
require('dotenv').config(); // Load environment variables

// Middleware
app.use(express.json());
app.use(cors());

// Configure Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API route to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIEVER, // Send email to yourself
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <p>You have a new contact form submission from your website.</p>
      <h3>Contact Details:</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Subject: ${subject}</li>
      </ul>
      <h3>Message:</h3>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully.');
    res.status(200).json({ success: true, message: 'Message sent successfully! I\'ll get back to you soon.' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

module.exports = app;