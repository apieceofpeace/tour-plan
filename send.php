<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$form = $_POST['form'];

if ( $form == "sendmsg" ){
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message <br>
";
}
if ( $form == "sendemail")
{
$title = "Новое обращение Best Tour Plan";
$body = "
<b>Новый email для рассылки:</b> $email
";
}
if ( $form == "sendall")
{
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message <br>
<b>Новый email для рассылки:</b> $email
";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'OkkoViewer@gmail.com'; // Логин на почте
    $mail->Password   = 'zntualzbkbieakio'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('OkkoViewer@gmail.com', 'Никита Никита'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('Ivash000@yandex.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if ( $form == "sendmsg" ){
    header('Location: message-send.html');
}
if ( $form == "sendemail")
{
    header('Location: email-send.html');
}
if ( $form == "sendall")
{
    header('Location: message-send.html');
}

// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);