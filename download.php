<?php

//getting file
$file = $_GET['file'];

//telling php it's an image
header('Content-type: image/png');

//telling php it's an attachment
header("Content-disposition: attachment; filename=canvasOutput.png");

//spit out file
readfile($file);
?>