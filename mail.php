<?php

$name = $_POST['user_name'];
$userEmail = $_POST['user_email'];
$userPhone = $_POST['user_phone'];
$userAddress = $_POST['user_address'];
$userSubj = $_POST['email_subject'];
$userMsg = $_POST['user_message'];

mail('contact@heysafina.com', $userSubj,  $userMsg, "From: $userEmail");
echo file_get_contents("index.html");

?>