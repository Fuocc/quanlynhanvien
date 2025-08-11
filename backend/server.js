require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, phone, licenses, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: "dangthienphuoc24@gmail.com",
        subject: `Yêu cầu liên hệ từ ${firstName} ${lastName}`,
        text: `
      Họ tên: ${lastName} ${firstName}
      Email: ${email}
      SĐT: ${phone}
      Số lượng license: ${licenses}
      Lời nhắn: ${message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: "Email đã được gửi thành công!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Đã xảy ra lỗi khi gửi email." });
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
