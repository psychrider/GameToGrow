<?php
    $dbserver = "localhost";
    $dbuser = "shivam";
    $dbpass = "fuckubitch";
    $db="kids_details";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $Email = test_input($_POST["email"]);
        $g23 = test_input($_POST["score"]);
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
    $result = $conn->query("UPDATE userdata SET g23 = $g23 WHERE email = '$Email';");
    if($result){echo "g12 updated";}
    else echo "not updated";
    echo('<script type="text/javascript"> window.open("tetris.php","_self");</script>'); 
    // while ($row = $result->fetch_assoc()) {
    //     echo $row['password']."<br>";
    //     $savedpass = $row['password'];        
    // }
    // if($savedpass == $Password){
    //     $age = 0;
    //     echo "account found!\n";
    //     $res = $conn->query("SELECT age FROM userdata WHERE email = '$Email';")
?>