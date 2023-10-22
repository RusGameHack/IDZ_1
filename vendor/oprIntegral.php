<?php
$pythonPath = "E:\\MAMP\\htdocs\\my_project\\mathLib\\venv\\Scripts\\python.exe";
$pythonScriptPath = 'E:\\MAMP\\htdocs\\my_project\\mathLib\\oprIntegral.py';
$arg1 = $_POST['text'];
$arg2 = $_POST['a'];
$arg3 = $_POST['c'];

$command = "$pythonPath $pythonScriptPath $arg1 $arg2 $arg3";

$output = exec($command);

echo "$output";
?>
