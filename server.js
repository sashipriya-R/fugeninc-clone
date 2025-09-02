// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS setup using .env
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ✅ Contact form route
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and subject are required",
    });
  }

  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true if 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail to site owner
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message || ""}`,
    });

    // Auto-reply mail to user
    await transporter.sendMail({
      from: `"Fugen Inc" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message!",
      text: `Hi ${name},\n\nThank you for contacting us. We’ve received your message:\n\n"${message}"\n\nWe’ll get back to you soon.\n\n- Fugen Inc Team`,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
