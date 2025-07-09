import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  try {
    console.log("📨 Получена форма:", { name, email, phone, message });

    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: "shaocargo",
        pass: "azsicwaadlixbhft" // Не твой основной пароль!
      }
    });

    const info = await transporter.sendMail({
      from: '"Shao Cargo" <aslan.mislishaev@mail.ru>',
      to: "shaocargo@yandex.ru",
      subject: "Новая заявка с сайта",
      html: `
        <h2>Новая заявка с сайта Shao Cargo</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong><br/>${message}</p>
      `
    });

    console.log("✅ Письмо отправлено:", info.messageId);
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("❌ Ошибка при отправке письма:", err.message || err);
    res.status(500).json({ success: false, error: err.message || 'Ошибка отправки письма' });
  }
}
