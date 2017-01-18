<?php
	//Positive message to be printed when form was successfully sent.
	$positive = "<center style='color: green;'>Your form has been submitted; I will respond within 24 hours.</center>";
	//Negative message to be printed when form is left empty.
	$negative = "<center style='color: red;'>Whoops! Looks like some fields were left empty; please try again.</center>";
	//Error message to be printed when the email could not be sent.
	$error = "<center style='color: red;'>Sorry, the email could not be sent; try again.</center>";

	$firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$body = "Name: $firstname $lastname \r\n"."E-Mail: $email \r\n"."Message: $message \r\n";
	$to = "trey.a.hope@gmail.com";
	$from = $email; 
	$subject = "Contact Sent To Website";
			 
	//Header for email.
		$headers = "From: $from"; 
		
		//Boundary 
		$semi_rand = md5(time()); 
		$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
		
		//Header for email, part II
		$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
		
		//Message text.
		$contents = $body; 

		//If form is empty...
		if($name == "" || $email == "" || $phone == "" || $date == "" || $description == ""){
			echo "$negative";
		}
		else{          
			if(@mail($to, $subject, $message, $headers)){
				echo $positive; 
			}else{
				echo "<center>Failure</center>";
			}
		}	

?>