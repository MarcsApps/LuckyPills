<?php
$get =  $_GET['Pill'];
$get1 = $_GET['Date'];

$jgetArr = array('Pill' => $get,'Date' => $get1);
$jget3=json_encode($jgetArr);

$file = 'log.json';
file_put_contents($file, $jget3, FILE_APPEND | LOCK_EX);

//$check = file_get_contents($file);
?>
