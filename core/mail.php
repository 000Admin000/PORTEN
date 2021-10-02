<?php 

  $json = file_get_contents( filename: '../goods.json');
  $json = json_decode($json, assoc: true);


$massege = '';
$massege .= '<h1>Заказ в магазине</h1>.';
$massege .= '<p>Телефон: '.POST['ephone'].'</p>'; 
$massege .= '<p>Почта: '.POST['email'].'</p>';
$massege .= '<p>Клиент: '.POST['ename'].'</p>';

$cart = $_POST['cart'];

foreach ($cart as $id=>$count) {
  $massege .= $json[$id]['name'];
};
print_r($massege);










?>


















