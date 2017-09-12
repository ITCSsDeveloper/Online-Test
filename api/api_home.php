<?php 
include_once('db.php');


if(isset($_GET['GET_Category']) && isset($_POST['token']))
{
	$datas = $database->select('tb_Category', '*');
	echo json_encode(  $datas  );
	exit();
}






?>