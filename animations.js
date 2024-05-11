document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener("click", function() {
        var icon = navbarToggler.querySelector("i");
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-close");
        } else {
            icon.classList.remove("fa-close");
            icon.classList.add("fa-bars");
        }
        // Remove boxy effect when the button is clicked
        navbarToggler.blur();
    });
});