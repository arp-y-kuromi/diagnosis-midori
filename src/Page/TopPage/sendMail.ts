import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/sendmail', async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('メールアドレスが必要です。');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // 例: Gmailを使用
    auth: {
      user: 'your-email@gmail.com', // あなたのメールアドレス
      pass: 'your-email-password', // あなたのメールパスワード
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'テストメール',
    text: 'このメールはテストとして送信されています。',
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('メールが送信されました。');
  } catch (error) {
    console.error('メールの送信エラー:', error);
    res.status(500).send('メールの送信に失敗しました。');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`サーバーがポート ${PORT} で起動しました。`);
});
