<?php
switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);
        
        //immer austauschen,je nachdem was in der form mitgegeben wird
        $name = $params->name;
        $email = $params->email; 
        $message = $params->message;

        $recipient = 'yvonnegamboeck@web.de';
        $subject = "Contact From $name <$email>";
        $headers = "From:  noreply@yvonne-gamboeck.developerakademie.com";

        mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}