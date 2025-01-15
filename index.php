<?php
include 'core/init.php';
if($userObj->isLoggedIn())
{
    $userObj->redirect('home.php');
}
if($_SERVER['REQUEST_METHOD'] === "POST")
{
    if(isset($_POST)){
        $email = trim(stripcslashes(htmlentities($_POST['email'])));
        $password = $_POST['password'];

        if(!empty($email) && !empty($password))
        {
            //Validate
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $error="Invalid Email Format.";
            }
            else{
                if($user = $userObj->emailExist($email))
                {
                    if(password_verify($password, $user->password))
                    //login user in
                {
                    session_regenerate_id();
                    //login the user
                    $_SESSION['userID'] = $user->userID;
                    //redirect the user
                    $userObj->redirect('home.php');
                }
                else
                {
                    $error= "Incorrect Email or Password.";
                }
                }
                
            }
        }
        else
        {  //display error
            $error = "Mothershot enter your shit to login.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Login Page</title>
</head>
<body>
    <div class="wrapper h-screen items-center justify-center flex">
        <div class="inner rounded flex bg-white w-11/12 border" style="height: 80%; margin-bottom: 5%;">

            <!-- LEFT_SIDE -->
            <div class="w-2/5 border-r">
                <div class="select-none flex h-full items-center justify-center">
                    <img class="select-none w-4/5" src="assets/images/login-left-bg.png" alt="Left Side Image">
                </div>
            </div><!-- LEFT_SIDE_END -->

            <!-- RIGHT_SIDE -->
            <div class="flex-2 flex rounded-xl w-full h-full">
                <!-- PROFILE_SECTION -->
                <div class="flex flex-1 justify-center items-center">
                    <div class="flex flex-col flex-1 h-full overflow-hidden overflow-y-auto items-center justify-start">
                        
                        <!-- Image and Welcome Text -->
                        <div class="mt-6 w-60 h-60 right-img rounded-full overflow-hidden">
                            <img class="h-auto w-full" src="assets/images/user.png" alt="User Image">
                        </div>

                        <!-- Decreased spacing after image -->
                        <div class="mt-2"></div> <!-- Reduced this margin-top -->

                        <div class="right-heading w-full flex flex-col items-center">
                            <h2 class="text-center" style="padding-top: 0px;">Welcome!</h2>
                            <p>Sign-in into your account.</p>
                        </div>

                        <!-- Login Form -->
                        <form method="post" class="w-full">
                            <div class="w-full flex flex-col items-center">
                                <div class="flex w-2/4 flex-col my-2 items-center">
                                    <input class="w-4/5 my-2 border border-gray-200 rounded px-4 py-2" type="email" name="email" placeholder="Email">
                                    <input class="w-4/5 my-2 border border-gray-200 rounded px-4 py-2" type="password" name="password" placeholder="Password">
                                    <div class="select-none error text-red-500 text-xs p-2 px-2 w-auto self-start ml-20">
                                        <!-- ERROR -->
                                         <?php
                                         if(isset($error))
                                         {
                                            echo $error;
                                         }
                                         ?>
                                    </div>
                                </div>
                                <div>
                                    <button class="active:-top-2 relative transition border border-gray-400 shadow-md my-4 bg-green-400 hover:bg-green-500 p-2 px-20 rounded-full text-white text-xl">Login</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div><!-- PROFILE_SECTION_END -->
            </div><!-- RIGHT_SIDE_END -->
        </div><!-- INNER_END -->
    </div><!-- WRAPPER_END -->
</body>
</html>
