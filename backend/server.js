const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Add dotenv for environment variables

const app = express();
app.use(express.json());

const corsOptions = {
  origin: '*', // Allow all origins for testing; restrict in production
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Reyansh Backend API Running');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Input validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    // Validate email format (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email format' });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'govindayadav2478@gmail.com',
        pass: process.env.GMAIL_PASS || 'fgwl anmd vxly igbe', // Use environment variables
      },
      debug: true, // Enable debugging for detailed logs
      logger: true,
    });

    // Verify SMTP connection
    await transporter.verify();

    // Email 1: Notification to the app's email (reyanshscientificworks@gmail.com)
    await transporter.sendMail({
      from: '"Reyansh Scientific Works" <govindayadav2478@gmail.com>', // Must match authenticated user
      to: 'reyanshscientificworks@gmail.com',
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    // Email 2: Thank You email to the user
    await transporter.sendMail({
      from: '"Reyansh Scientific Works" <govindayadav2478@gmail.com>',
      to: email, // User's submitted email
      subject: 'Thank You for Contacting Reyansh Scientific Works',
      text: `Dear ${firstName} ${lastName},\n\nThank you for reaching out to us! We have received your message and will get back to you soon.\n\nYour Message:\n${message}\n\nBest regards,\nReyansh Scientific Works Team`,
      html: `<p>Dear ${firstName} ${lastName},</p>
             <p>Thank you for reaching out to us! We have received your message and will get back to you soon.</p>
             <p><strong>Your Message:</strong><br>${message}</p>
             <p>Best regards,<br>Reyansh Scientific Works Team</p>`,
    });

    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ success: false, error: 'Failed to send emails', details: error.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});