<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'deva.adzany00@gmail.com';         // 🔁 Ganti dengan email kamu
        $mail->Password   = 'swci jfze kekp upkx';           // 🔁 Ganti dengan App Password (bukan password biasa)
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Penerima
        $mail->setFrom('deva.adzany00@gmail.com', 'Website Geo');
        $mail->addAddress('deva.adzany00@gmail.com');        // 🔁 Ganti tujuan email

        // Konten
        $mail->isHTML(false);
        $mail->Subject = 'Pesan Baru dari Website';
        $mail->Body    = "Nama: $name\nEmail: $email\n\nPesan:\n$message";

        $mail->send();
        echo "Pesan berhasil dikirim!";
    } catch (Exception $e) {
        echo "Terjadi kesalahan saat mengirim pesan. Pesan error: {$mail->ErrorInfo}";
    }
} else {
    echo "Metode tidak valid.";
}
