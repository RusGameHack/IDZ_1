<?php
$pythonPath = "E:\\MAMP\\htdocs\\my_project\\mathLib\\venv\\Scripts\\python.exe";
$pythonScriptPath = 'E:\\MAMP\\htdocs\\my_project\\mathLib\\main.py';
$arg1 = $_POST['text'];

$command = "$pythonPath $pythonScriptPath $arg1 2>&1";

$output = exec($command);

echo "$output";
?>
