require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT),
  secure: false, // false = STARTTLS (port 587), true = SSL (port 465)
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

async function sendTestMail() {
  try {
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified!');

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: '👋 Xin chào từ ERP Cloudaz!',
      text: 'Xin chào! Đây là email chào hỏi từ ERP Cloudaz.',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; max-width: 600px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #4A90E2;">👋 Xin chào!</h2>
          <p style="font-size: 16px; color: #333;">
            Đây là email chào hỏi được gửi từ <strong>ERP Cloudaz</strong>.
          </p>
          <p style="font-size: 15px; color: #555;">
            Chúc bạn một ngày tốt lành! 😊
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <small style="color: #aaa;">Gửi lúc: ${new Date().toLocaleString('vi-VN')}</small>
        </div>
      `,
    });

    console.log('✅ Email đã gửi thành công!');
    console.log('   Message ID:', info.messageId);
    console.log('   To:', process.env.MAIL_TO);
  } catch (error) {
    console.error('❌ Lỗi gửi mail:', error.message);
    if (error.code) console.error('   Error code:', error.code);
    process.exit(1);
  }
}

sendTestMail();
