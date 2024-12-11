<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Default WAMP username
$password = ""; // Default WAMP password
$dbname = "guitar_shop"; // Name of your database

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data sent via POST
$data = json_decode(file_get_contents("php://input"), true);

// Log incoming data to a file for debugging
file_put_contents('incoming_data.log', print_r($data, true), FILE_APPEND);

// Check if data is received
if (empty($data)) {
    file_put_contents('incoming_data.log', "No data received\n", FILE_APPEND);
}

// Extract data
$product_name = $data['productName'] ?? '';
$product_price = $data['productPrice'] ?? '';
$quantity = $data['quantity'] ?? '';
$customer_name = $data['name'] ?? '';
$address = $data['address'] ?? '';
$city = $data['city'] ?? '';
$zip = $data['zip'] ?? '';

// Sanitize input (to prevent SQL injection)
$product_name = $conn->real_escape_string($product_name);
$product_price = $conn->real_escape_string($product_price);
$quantity = (int)$quantity;
$customer_name = $conn->real_escape_string($customer_name);
$address = $conn->real_escape_string($address);
$city = $conn->real_escape_string($city);
$zip = $conn->real_escape_string($zip);

// Insert data into the orders table
$sql = "INSERT INTO orders (product_name, product_price, quantity, customer_name, address, city, zip)
        VALUES ('$product_name', '$product_price', '$quantity', '$customer_name', '$address', '$city', '$zip')";

if ($conn->query($sql) === TRUE) {
    echo "Order saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>