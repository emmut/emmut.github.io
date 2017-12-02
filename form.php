<?php

//Här hade jag velat skicka iväg ett mail med mail(), men får bli när jag lägger upp den på en egen server
if(isset($_POST)){
  //Lägger till datan till variablen $result
  $result = array("data" => $_POST);
  //Kodar om datan till json
  echo json_encode($result);

} else {
  error;
}
?>
