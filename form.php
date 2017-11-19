<?php

print_r($_POST);

if(isset($_POST)) {
  // Get data
  $name = $_POST['name'];
  $email = $_POST['email'];

  // Recipient
  $to = "e.jansson@icloud.com";

  // Subject
  $subject = "From {$email}";

  // Message
  $message = "Test";

  // Headers
  $headers = "From: {$name} <{$email}>\r\n";
  $headers .= "Reply to: e.jansson@icloud.com\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  // Send email
  mail($to, $subject, $message, $headers);

  $result = array("name"=>$name, "data" => $_POST);
  echo json_encode($result);

} else {
  print_r('error');
}
