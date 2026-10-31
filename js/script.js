const headerLinksMobile = document.querySelector(".header-links__mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const closeIcon = document.querySelector(".close-icon");
const footerScrollTopBtn = document.querySelector(".footer__scroll-top-btn");

let isMobileMenuOpen = false;

const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    headerLinksMobile.classList.toggle("header-links__mobile--active", isMobileMenuOpen);
    mobileMenu.style.left = isMobileMenuOpen ? "0" : "-100%";
};

headerLinksMobile.addEventListener("click", toggleMobileMenu);
closeIcon.addEventListener("click", toggleMobileMenu);
footerScrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
