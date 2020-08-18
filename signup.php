<?php
session_start();
    $_SESSION['message']='';
    $dbserver = "localhost";
    $dbuser = "shivam";
    $dbpass = "fuckubitch";
    $db="kids_details";
    $progress = 0;
    $g11 = $g12 =$g13 =$g21 =$g22 =$g23 =0;
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = test_input($_POST["name"]);
        $email = test_input($_POST["email"]);
        $password = test_input($_POST["password"]);
        $age = test_input($_POST["age"]);  
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
    //else echo 'Connected successfully ';
    $sql = "INSERT INTO  userdata (email, name , password ,age,g11,g12,g13,g21,g22,g23,progress)
        VALUES ('$email','$name','$password',$age,$g11,$g12,$g13,$g21,$g22,$g23,$progress)";
    if ($conn->query($sql) === TRUE) {
        //echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    //$count =0;
    //$result = $conn->query('SELECT * FROM userdata;');
    // while ($row = $result->fetch_assoc()) {
    //     echo $row['name']."<br>";
    //     $count+=1;
    // }
    $_SESSION['name']=$name;
    $_SESSION['email']=$email;
    $_SESSION['age']=$age;
    if($age <6){
        echo('<script type="text/javascript"> window.open("age1menu.php","_self");</script>');       
    }
    else if($age > 5){
        echo('<script type="text/javascript"> window.open("age2menu.php","_self");</script>');            
    }

?>