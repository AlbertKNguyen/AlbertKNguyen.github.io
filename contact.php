<?php

if(isset($_POST["submit"]))
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mailTo = "anguyen359@ucmerced.edu";
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$name.".\n\n".$message;


    sendMail($mailTo, $email, $txt, $headers);
    header("Location: index.html?mailsend")

}