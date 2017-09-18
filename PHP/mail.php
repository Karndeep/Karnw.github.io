<?php

      $Name = $_POST['txtName'];
      $Email = $_POST['txtEmail'];
      $Message = $_POST['txtMessage'];
      $Company = $_POST['txtCompany'];

      $to = "kkahlon3672@gmail.com";
      $subject = "Email from: " . $Name . " " . $Company;
      $headers = $Email . " " . $Name . " " . $Company;
      $message = " From: ".$Name. " Email: " .$Email. " Message: " .$Message. " Company: " . $Company;

      mail($to,$subject,$message,$headers);
 ?>
