// ===============================
// Cargar Navbar
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    fetch("components/navbar.html")
        .then(response => {

            if (!response.ok) {
                throw new Error("No se pudo cargar navbar.html");
            }

            return response.text();

        })

        .then(data => {

            document.getElementById("navbar-container").innerHTML = data;

        })

        .then(() => {

            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", () => {

                if (!navbar) return;

                if (window.scrollY > 40) {

                    navbar.classList.add("scrolled");

                } else {

                    navbar.classList.remove("scrolled");

                }

            });

        })

        .catch(error => console.error(error));

});