<?php
  $fullname = $_POST['fullname'];
  $email = $_POST['email'];
  $messages = $_POST['messages'];
?>

<?php
	$email_from = $email;

	$email_subject = "New Form submission";

	$email_body = "You have received a new message from the user $fullname.\n\nHere is the message:\n $messages";
?>

<?php

  $to = "salim.ernest17@gmail.com";

  $headers = "From: $email_from \r\n";

//   $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

?>

