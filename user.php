<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./assets/icons/favicon.ico" sizes="16x16 32x32 48x48 64x64">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/components.css">
    <link rel="stylesheet" href="./css/auth.css">
    <title>Account Summary | Mr. Tone Guitar Shop</title>
</head>
<body class="background">
    <nav class="navigation__bg">
        <div class="navigation container container--xl">
            <!-- Logo and Profile Section -->
            <div class="navigation__item">
                <div>
                    <a href="./index.html">
                        <a href="./index.html">
                            <img src="./assets/images/logo.png" alt="Logo image" class="navigation__logo" />
                        </a>
                    </div>
                   
                    <div class="navigation__profile">
                        <a href="./register.html">
                            <img src="./assets/icons/icon_account.svg" alt="Account icon" />
                        </a>
                        <p>
                        Welcome,
                        <strong><a href="./profile.html" class="nav-link"><?php echo htmlspecialchars($_POST['first_name'] . ' ' . $_POST['last_name']); ?></a></strong>!
                    </p>
                    </div>
                    </div>
                    <!-- Navigation Links -->
                    <div class="navigation__item">
                        <ul class="navigation__links">
                            <li><a href="./index.html" class="navigation__links--active">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li class="dropdown">
                                <a href="./order.html">Order</a>
                                <div class="dropdown__content">
                                    <ul class="navigation__links dropdown__links">
                                        <li><a href="./place-order.html">Place Order</a></li>
                                        <li><a href="./summary.html">Summary of order</a></li>
                                        <li><a href="./order.html">History of orders</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="./about.html">About Us</a></li>
                            <li><a href="./profile.html">Profile</a></li> 
                        </ul>
                    </div>
                    </div>
                    </nav>
    <main class="main--padding">
        <hr class="divider container--xl">
        <div class="auth container container--xl">
            <div class="account-summary-container">
                <h1>Account Summary</h1>
                <p>Here are the details you provided:</p>
                <ul>
                    <li><strong>First Name:</strong> <?php echo htmlspecialchars($_POST['first_name']); ?></li>
                    <li><strong>Last Name:</strong> <?php echo htmlspecialchars($_POST['last_name']); ?></li>
                    <li><strong>Email:</strong> <?php echo htmlspecialchars($_POST['email']); ?></li>
                    <li><strong>Date of Birth:</strong> <?php echo htmlspecialchars($_POST['dob']); ?></li>
                </ul>
            </div>
        </div>
    </main> 
    <?php
    $host = "localhost"; 
    $db_user = "root"; 
    $db_pass = ""; 
    $db_name = "register_db"; 

    $conn = new mysqli($host, $db_user, $db_pass, $db_name);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
        $last_name = mysqli_real_escape_string($conn, $_POST['last_name']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $dob = mysqli_real_escape_string($conn, $_POST['dob']);

        $today = date("Y-m-d");
        if ($dob >= $today) {
            echo "<script>alert('Date of Birth should be a past date.');</script>";
        } else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            $sql = "INSERT INTO users (first_name, last_name, email, password, dob) 
                    VALUES ('$first_name', '$last_name', '$email', '$hashed_password', '$dob')";

            if ($conn->query($sql) === TRUE) {
                echo "<script>alert('New account created successfully!');</script>";
            } else {
                echo "<script>alert('Error: " . $sql . "<br>" . $conn->error . "');</script>";
            }
        }
    }

    $conn->close();
    ?>
</body>
</html>
