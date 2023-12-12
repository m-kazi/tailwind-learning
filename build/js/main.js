//Making the hamburger menu interactive
//When the hamburger menu is clicked, it will run the toggleMenu() function

const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);
};

//DOMContentLoaded = to full document, the HTML DOM is loaded before calling the fuction.
document.addEventListener("DOMContentLoaded", initApp);
