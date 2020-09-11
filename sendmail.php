<?php
  if(!isset($_POST['submit'])) {
    //This page should not be accessed directly. Need to submit the form.
    echo "error; you need to submit the form!";
  }
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $text = $_POST['text'];
  $email_from = 'robot@abtk.kz';
  $email_subject = "New Form submission";
  $email_body = "You have received a new message from the user $name.\n".
      "Here is the message:\n $text".
  $to = "sjeurt@gmail.com, combatcmd@gmail.com";
  $headers = "From: $email_from \r\n";
  mail($to,$email_subject,$email_body,$headers);
  header('Location: thank-you.html');
?> 