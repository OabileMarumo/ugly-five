import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail", // or "outlook", "yahoo", etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password (NOT regular password)
  },
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, tour, date, guests, message } = req.body;

  // Email to business owner
  const mailOptions = {
    from: `"Ugly Five Safari" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Safari Inquiry from ${name}`,
    html: `
      <h2>New Safari Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Tour:</strong> ${tour}</p>
      <p><strong>Preferred Date:</strong> ${date || "Not specified"}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No additional requests"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
