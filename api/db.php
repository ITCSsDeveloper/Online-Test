<?php 
include('Medoo.php');

// Using Medoo namespace
use Medoo\Medoo;
 
// Initialize
$database = new Medoo([
    'database_type' => 'mysql',
    'database_name' => 'online_test',
    'server' => 'localhost',
    'username' => 'online_test',
    'password' => 'online_test',
    'charset' => 'utf8'
]);