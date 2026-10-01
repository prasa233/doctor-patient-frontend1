const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        if (!email || !password) {

            alert("Please enter all fields.");

            return;
        }

        alert("Login successful!");

    });
}


const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;

            const role =
                document.getElementById("role").value;


            if (password !== confirmPassword) {

                alert("Passwords do not match.");

                return;
            }


            if (!role) {

                alert("Please select a role.");

                return;
            }


            alert(
                "Registration successful!"
            );

            window.location.href = "index.html";

        }
    );
}
