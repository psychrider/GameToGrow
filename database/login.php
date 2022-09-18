<?php
session_start();
    $dbserver = "localhost";
    $dbuser = "shivam";
    $dbpass = "fuckubitch";
    $db="kids_details";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $Email = test_input($_POST["email"]);
        $Password = test_input($_POST["password"]);
     }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);    
        $data = htmlspecialchars($data);
        return $data;
    }

    $conn = new mysqli($dbserver, $dbuser,$dbpass,$db);

    if(mysqli_connect_errno()) {
        echo('Could not connect: ' . mysqli_connect_error());
        }
    else echo 'Connected successfully ';

    $savedpass = '';
    $result = $conn->query("SELECT password FROM userdata WHERE email = '$Email';");
    while ($row = $result->fetch_assoc()) {
        echo $row['password']."<br>";
        $savedpass = $row['password'];        
    }
    
    if($savedpass == $Password){
        $age = 0;
        echo "account found!\n";
        $res = $conn->query("SELECT age FROM userdata WHERE email = '$Email';");
        while ($row = $res->fetch_assoc()) {
            echo $row['age']."<br>";
            $age = $row['age'];        
        } 
        $name='';
        $res2 = $conn->query("SELECT name FROM userdata WHERE email = '$Email';");
        while ($row1 = $res2->fetch_assoc()) {
            echo $row1['name']."<br>";
            $name = $row1['name'];        
        }       
        
        $_SESSION['email']=$Email;
        $_SESSION['name']=$name;
        if($age <6){
            echo('<script type="text/javascript"> window.open("age1menu.php","_self");</script>');       
        }
        else if($age > 5){
            echo('<script type="text/javascript"> window.open("age2menu.php","_self");</script>');            
        }
    }
    else {
        echo('<script type="text/javascript"> window.open("login.html","_self");</script>');
        echo '<script type="text/javascript"> alert("sry Wrong password :(");</script>';
    }
?>