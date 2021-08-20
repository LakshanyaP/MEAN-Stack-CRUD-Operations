<?php
    $host = 'localhost';
    $user = 'root';
    $dbname = 'Lab4';
    $con = mysqli_connect($host, $user, "",$dbname);
    if(!$con)
    {         
        die('Could not connect: '.mysqli_connect_error()); 
    }      
    echo 'Connected successfully<br>';
    
    $fname = $_POST['fname'];
    $lname = $_POST['lname']; 
    $email = $_POST['email'];
    $pwd = $_POST['password'];
    $phoneno = $_POST['phone'];
    $gender = $_POST['gender'];
    $city = $_POST['city'];
    // echo $fname;    // echo $lname;    // echo $email;    // echo $pwd;    // echo $phoneno;    // echo $gender;    // echo $city;

    $flag = 0;
    $phoneno_pattern = '/^[6-9]\d{9}$/';
    $pwd_pattern = '/^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
    {
        echo "Invalid email format! <br>"; 
        $flag = 1;       
    }
    if(!preg_match($pwd_pattern, $pwd))
    {
        echo "Invalid Password! Password requires atleast 1 special character, 1 number and 1 uppercase character! <br>";
        $flag = 1;
    }
    if(!preg_match($phoneno_pattern, $phoneno))
    {
        echo "Invalid phone number! Phone Number should be a 10-digit number beginning with 6-9! <br>";
        $flag = 1;
    }
    
    if($flag == 0)
    {
        $sql="INSERT INTO Customer(id,fname,lname,email,pwd,phoneno,gender,city) VALUES(NULL,'$fname','$lname','$email','$pwd','$phoneno','$gender','$city')";
        $t = mysqli_query($con, $sql);
        if($t) 
        { 
            echo "Query Inserted!<br>"; 
        } 
        else
        {
            echo "Query Not Inserted!<br>";
        }
    }
    
?>