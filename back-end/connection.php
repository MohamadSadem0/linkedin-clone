<?php
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
 header('Access-Control-Allow-Headers: Authorization, Content-Type');
 header('Content-Type: application/json');

 $host = "localhost";
$user = "root";
$password = "";
$db_name = "linkedindb";

$conn = mysqli_connect($host, $user, $password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}