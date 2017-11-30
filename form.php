<?php

if(isset($_POST)){

  $result = array("data" => $_POST);
  echo json_encode($result);

} else {
  error;
}
?>
