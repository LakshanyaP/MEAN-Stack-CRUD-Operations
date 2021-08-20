<!DOCTYPE html>
<html>
    <head>
        <style>
            table, th, td 
            {
                border: 1px solid black;
                border-collapse: collapse;
                padding-left: 5px;
                padding-right: 5px;
            }
            /* body
            {
                background-image: url("Media/background4.jpg");
                background-repeat: no-repeat;
                background-size: cover;
            } */
            .box1
            {
                background-color:		#A9A9A9;
                margin-left: 400px;
                margin-top: 75px;
                border-radius: 20px;
                padding-top: 50px;
                padding-left: 50px;
                padding-right: 50px;
                padding-bottom: 30px;
                height: 300px;
                width: 600px;
            }
        </style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
    </head>
    <body>
        
        <h1 align = 'center' style= 'color:black; font-family:Sofia; font-weight: lighter;'>{{message}}</h1>

        <?php
        $host = 'localhost';
        $user = 'root';
        $dbname = 'Lab4';

        $con = mysqli_connect($host, $user, "",$dbname);
        if(!$con)
        {         
            die('Could not connect: '.mysqli_connect_error()); 
        } 
        // echo 'Connected successfully<br>';

        $sql = "SELECT id,fname,lname,email,phoneno,gender,city FROM Customer";
        // $sql = "SELECT * FROM Customer";
        if($result = mysqli_query($con, $sql)){
            if(mysqli_num_rows($result) > 0)
            {
                echo "<br>";
                echo "<div id='box1' class='box1'>";
                echo "<table>";
                    echo "<tr>";
                        echo "<th>ID</th>";
                        echo "<th>First name</th>";
                        echo "<th>Last Name</th>";
                        echo "<th>Email</th>";
                        // echo "<th>Password</th>";
                        echo "<th>Phone Number</th>";
                        echo "<th>Gender</th>";
                        echo "<th>City</th>";
                    echo "</tr>";
                while($row = mysqli_fetch_array($result))
                {
                    echo "<tr>";
                        echo "<td>" . $row['id'] . "</td>";
                        echo "<td>" . $row['fname'] . "</td>";
                        echo "<td>" . $row['lname'] . "</td>";
                        echo "<td>" . $row['email'] . "</td>";
                        // echo "<td>" . $row['pwd'] . "</td>";
                        echo "<td>" . $row['phoneno'] . "</td>";
                        echo "<td>" . $row['gender'] . "</td>";
                        echo "<td>" . $row['city'] . "</td>";
                    echo "</tr>";
                }
                echo "</div>";
                echo "</table>";
                mysqli_free_result($result);
            } 
            else
            {
                echo "No records matching your query were found.";
            }
        } 
        else
        {
            echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
        }
        mysqli_close($con);
        ?>

    </body>
</html>