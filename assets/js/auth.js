/* =========================================================
   YOUR SHOES - AUTH SYSTEM
   TEMPORARY LOCAL TEST
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SIGN UP
    ===================================================== */

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("signupName").value.trim();

            const email =
                document.getElementById("signupEmail").value.trim();

            const phone =
                document.getElementById("signupPhone").value.trim();

            const password =
                document.getElementById("signupPassword").value;

            const confirmPassword =
                document.getElementById("signupConfirmPassword").value;

            const message =
                document.getElementById("signupMessage");


            if (password !== confirmPassword) {

                message.className = "auth-message error";

                message.textContent =
                    "Passwords do not match.";

                return;
            }


            if (password.length < 6) {

                message.className = "auth-message error";

                message.textContent =
                    "Password must be at least 6 characters.";

                return;
            }


            /*
             TEMPORARY LOCAL STORAGE

             Real website mein password yahan save
             nahi karna. Supabase Authentication
             password ko securely handle karega.
            */

            const user = {
                name: name,
                email: email,
                phone: phone
            };


            localStorage.setItem(
                "yourShoesUser",
                JSON.stringify(user)
            );


            message.className =
                "auth-message success";

            message.textContent =
                "Account created successfully!";


            setTimeout(function () {

                window.location.href =
                    "index.html";

            }, 1200);

        });

    }



    /* =====================================================
       LOGIN
    ===================================================== */

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail").value.trim();


            const password =
                document.getElementById("loginPassword").value;


            const message =
                document.getElementById("loginMessage");


            const savedUser =
                localStorage.getItem("yourShoesUser");


            if (!savedUser) {

                message.className =
                    "auth-message error";

                message.textContent =
                    "No account found. Please create an account first.";

                return;
            }


            const user =
                JSON.parse(savedUser);


            if (email !== user.email) {

                message.className =
                    "auth-message error";

                message.textContent =
                    "Incorrect email address.";

                return;
            }


            /*
             Temporary demo login.

             Real password verification Supabase
             Authentication karega.
            */

            localStorage.setItem(
                "yourShoesLoggedIn",
                "true"
            );


            message.className =
                "auth-message success";

            message.textContent =
                "Login successful!";


            setTimeout(function () {

                window.location.href =
                    "index.html";

            }, 1000);

        });



    }

});



/* =========================================================
   LOGIN / LOGOUT BUTTON
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const authButton = document.getElementById("authButton");
    const mobileAuthButton =
        document.getElementById("mobileAuthButton");

    const isLoggedIn =
        localStorage.getItem("yourShoesLoggedIn") === "true";


    /* =========================
       LOGGED IN
    ========================= */

    if (isLoggedIn) {

        if (authButton) {
            authButton.textContent = "Logout";
            authButton.href = "#";

            authButton.addEventListener("click", function (event) {

                event.preventDefault();

                logoutUser();

            });
        }


        if (mobileAuthButton) {

            mobileAuthButton.textContent = "Logout";
            mobileAuthButton.href = "#";

            mobileAuthButton.addEventListener("click", function (event) {

                event.preventDefault();

                logoutUser();

            });
        }

    }


    /* =========================
       LOGOUT FUNCTION
    ========================= */

    function logoutUser() {

        localStorage.removeItem("yourShoesLoggedIn");

        alert("You have been logged out.");

        window.location.href = "login.html";

    }

});