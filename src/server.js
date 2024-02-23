// server.js or wherever your Express server is set up
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Replace with your email configuration
let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465, // Используйте порт 465 для SSL
    secure: true, // Используйте true, так как мы используем SSL
    auth: {
         // Ваш пароль от почтового ящика на Mail.ru
    }
});

app.post('/api/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;
  const mailOptions = {
    from: email,
    to: 'your-receiving-email@example.com',
    subject: `New contact from ${name}`,
    text: `You have received a new message from the contact form on your website. Here are the details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

// Listen on a specific port, e.g., 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});