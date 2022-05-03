// window.onload = function() {
    const mobileMenuIcon = document.querySelector(".burgerIcon");
    const mobileMenuDropdown = document.querySelector(".mobileNav");

    mobileMenuIcon.addEventListener("click", function() {
        mobileMenuIcon.classList.toggle("active");
        mobileMenuDropdown.classList.toggle("active");
    });

    const links = document.querySelectorAll(".mobileNav a")
    // console.log(links);

    links.forEach(link => {
        // console.log(link);
        link.addEventListener("click", function() {
            // console.log("Clicked");
            mobileMenuDropdown.classList.remove("active");
            mobileMenuIcon.classList.remove("active");
        })
    })
// };