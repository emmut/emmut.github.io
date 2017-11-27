<?php

print_r($_POST);


  $name = $_POST['name'];
  $email = $_POST['email'];


  $result = array("name"=>$name, "data" => $_POST);
  echo json_encode($result);
