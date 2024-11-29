<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "register_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$email = $_POST['email'];
$dob = $_POST['dob'];
$password = $_POST['password'];

$sql = "UPDATE users SET first_name='$firstName', last_name='$lastName', email='$email', dob='$dob', password='$password' ORDER BY id DESC LIMIT 1";

if ($conn->query($sql) === TRUE) {
  echo "<script>
          alert('Record updated successfully');
          window.location.href = 'index.html';
        </script>";
} else {
  echo "<script>
          alert('Error updating record: " . $conn->error . "');
          window.location.href = 'index.html';
        </script>";
}

$conn->close();
?>