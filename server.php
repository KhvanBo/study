<?php
$_POST = json_decode(file_get_contents("php://input"), true); //получаем JSON данные на PHP
echo var_dump($_POST);
?>