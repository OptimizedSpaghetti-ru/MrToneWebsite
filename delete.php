<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "register_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM users ORDER BY id DESC LIMIT 1";

if ($conn->query($sql) === TRUE) {
  echo "<script>
          alert('Record deleted successfully');
          window.location.href = 'register.html';
        </script>";
} else {
  echo "<script>
          alert('Error deleting record: " . $conn->error . "');
          window.location.href = 'register.html';
        </script>";
}

$conn->close();
?>