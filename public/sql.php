<?php

echo $_POST['movieName'].'<br>';
echo $_POST['theater'].'<br>';
echo $_POST['day'].'<br>';
echo $_POST['time'].'<br>';
echo $_POST['ticket'].'<br>';
echo $_POST['seat'].'<br>';
echo $_POST['hall'].'<br>'; 
echo $_POST['btn'].'<br>';

if($_POST['btn']=='確認送出'){
    header('Location: ok.html');
}else{
    header('Location: cancel.html');
} 
?> 