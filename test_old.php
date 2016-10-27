<?php

$get = $_GET['log'];
$jget= json_encode($get);
 var_dump($get);
var_dump(json_decode($jget)); die;
//

// $pillsJson = file_get_contents('jpills.json');
// $pillsJson .= $jchoice;
  $file = 'jpills.json';
// file_put_contents($file, $jget, FILE_APPEND | LOCK_EX);

 $check = file_get_contents($file);
var_dump(json_encode($check));die;
  //  var_dump($check2);die;
?>
