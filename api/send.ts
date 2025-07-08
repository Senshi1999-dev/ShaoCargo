import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru", // или smtp.yandex.ru, smtp.gmail.com
      port: 465,
      secure: true,
      auth: {
        user: "aslan.mislishaev@mail.ru",
        pass: "hLslUPgYFqM8CTfuioIt" // Никому не показывай!
      }
    });

    await transporter.sendMail({
      from: '"Shao Cargo" <aslan.mislishaev@mail.ru>',
      to: "aslan.mislishaev@mail.ru,shaocargo@inbox.ru",
      subject: "Новая заявка с сайта",
      html: `
        <h2>Новая заявка с сайта Shao Cargo</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong><br/>${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка отправки письма' });
  }
}
