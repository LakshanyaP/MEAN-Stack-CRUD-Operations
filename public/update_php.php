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

        $id = $_POST['id'];
        $fname = $_POST['fname'];
        $lname = $_POST['lname']; 
        $email = $_POST['email'];
        $pwd = $_POST['password'];
        $phoneno = $_POST['phone'];
        $gender = $_POST['gender'];
        $city = $_POST['city'];

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
            $sql="UPDATE Customer SET fname='$fname', lname='$lname',email = '$email',pwd = '$pwd',phoneno = '$phoneno',gender = '$gender',city = '$city' WHERE id = '$id'";
            //$sql ="DELETE FROM Customer WHERE id='$id'";
            $t = mysqli_query($con, $sql);
            if($t) 
            { 
                echo "Query Updated!<br>"; 
            } 
            else
            {
                echo "Query Not Updated!<br>";
            }
        }
        ?>