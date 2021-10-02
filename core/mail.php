<?php 
permissions-policy: interest-cohort=()
  $json = file_get_contents('../goods.json');
  $json = json_decode($json, true);


$massege = '';
$massege .= '<h1>Заказ в магазине.</h1>';
$massege .= '<p>Телефон: '.$_POST['ephone'].'</p>'; 
$massege .= '<p>Почта: '.$_POST['email'].'</p>';
$massege .= '<p>Клиент: '.$_POST['ename'].'</p>';

$cart = $_POST['cart'];
$sum = 0;


foreach ($cart as $id => $count) {
  $massege .= $json[$id]['name'].'('.$json[$id]['cost'].'руб'.')'.'---';
  $massege .= $count.'шт---';
  $massege .= $count * $json[$id]['cost'].'руб'.'<br>';
  $sum = $sum + $count * $json[$id]['cost'];
}

$massege .= 'Всего: '.$sum.'руб';
print_r($massege);

$to = 'vk569759@gmail.com'.','; //не забудь поменять!
$to .=$_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Заказ в магазине', $spectext.$message.'</body></html>', $headers);



















?>


















