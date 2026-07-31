const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(255,255,255,.96)";

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,.08)";

        }

        else {

            navbar.style.background =
                "rgba(255,255,255,.85)";

            navbar.style.boxShadow =
                "none";

        }

    }
);