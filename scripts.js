window.onload = function() {
    const mobileMenuIcon = document.querySelector(".burgerIcon");
    const mobileMenuDropdown = document.querySelector(".mobileNav");

    mobileMenuIcon.addEventListener("click", function() {
        mobileMenuIcon.classList.toggle("active");
        mobileMenuDropdown.classList.toggle("active");
    });
}

