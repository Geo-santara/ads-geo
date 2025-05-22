import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone_number, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ptgeosantaraindonesia@gmail.com',
      pass: 'gywx ulmr kwnn epos', // App Password Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'ptgeosantaraindonesia@gmail.com',
      subject: 'Pesan Baru dari Website',
      text: `Nama: ${name}\nEmail: ${email}\nNomor: ${phone_number}\n\nPesan:\n${message}`,
    });

    res.status(200).json({ message: 'Email berhasil dikirim!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengirim email.' });
  }
}
