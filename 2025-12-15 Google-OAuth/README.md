# 🔐 Google OAuth Login in PHP (Complete Guide)

This README explains **step by step** how to implement **Google Login (OAuth 2.0)** in a **pure PHP project**. It is beginner‑friendly and suitable for uploading directly to **GitHub**.

---

## 📌 What is Google OAuth?
Google OAuth allows users to log in to your website using their **Google account**, without creating a new username/password.

### ✅ Benefits
- No password handling (more secure)
- Faster login for users
- Trusted authentication by Google

---

## 🧰 Requirements
- PHP **7.4 or higher**
- Composer installed
- Google account
- Web server (Apache / XAMPP / WAMP)

---

## 📁 Project Structure
```
php-google-oauth/
│
├── config.php
├── index.php
├── callback.php
├── logout.php
├── dashboard.php
├── vendor/          (Composer files)
└── README.md
```

---

## 🔹 Step 1: Create Google OAuth Credentials

1. Go to **Google Cloud Console**
2. Create a new project
3. Go to **APIs & Services → Credentials**
4. Click **Create Credentials → OAuth Client ID**
5. Choose **Web Application**
6. Add Authorized Redirect URI:
```
http://localhost/php-google-oauth/callback.php
```
7. Copy:
- Client ID
- Client Secret

---

## 🔹 Step 2: Install Google API Client

Run this command inside your project folder:

```bash
composer require google/apiclient:^2.0
```

This will create the **vendor/** folder.

---

## 🔹 Step 3: config.php

```php
<?php
require_once 'vendor/autoload.php';

$client = new Google_Client();
$client->setClientId('YOUR_CLIENT_ID');
$client->setClientSecret('YOUR_CLIENT_SECRET');
$client->setRedirectUri('http://localhost/php-google-oauth/callback.php');
$client->addScope('email');
$client->addScope('profile');
```

⚠️ Replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET`

---

## 🔹 Step 4: index.php (Login Page)

```php
<?php
require_once 'config.php';

$login_url = $client->createAuthUrl();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Google Login</title>
</head>
<body>
    <h2>Login with Google</h2>
    <a href="<?php echo $login_url; ?>">
        <button>Sign in with Google</button>
    </a>
</body>
</html>
```

---

## 🔹 Step 5: callback.php

This file handles Google response.

```php
<?php
session_start();
require_once 'config.php';

if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);

    if (!isset($token['error'])) {
        $client->setAccessToken($token['access_token']);

        $google_service = new Google_Service_Oauth2($client);
        $user_info = $google_service->userinfo->get();

        $_SESSION['user'] = [
            'id' => $user_info->id,
            'name' => $user_info->name,
            'email' => $user_info->email,
            'picture' => $user_info->picture
        ];

        header('Location: dashboard.php');
        exit();
    }
}

header('Location: index.php');
exit();
```

---

## 🔹 Step 6: dashboard.php

```php
<?php
session_start();

if (!isset($_SESSION['user'])) {
    header('Location: index.php');
    exit();
}

$user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome <?php echo htmlspecialchars($user['name']); ?></h2>
    <p>Email: <?php echo htmlspecialchars($user['email']); ?></p>
    <img src="<?php echo $user['picture']; ?>" width="100">
    <br><br>
    <a href="logout.php">Logout</a>
</body>
</html>
```

---

## 🔹 Step 7: logout.php

```php
<?php
session_start();
session_destroy();
header('Location: index.php');
exit();
```

---

## 🔐 Security Best Practices
- Use **HTTPS** in production
- Store client secrets in **.env file**
- Validate session properly
- Regenerate session ID after login

---

## 🚀 Production Tips
- Add database storage for users
- Link Google account to existing users
- Use Laravel Socialite if migrating to Laravel

---

## 📄 License
This project is open‑source and free to use.

---

## ⭐ Author
Created for learning and educational purposes.

If this helped you, give the repo a ⭐ on GitHub!

