const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navLinks");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

const toggleMenu = () => {
    const isActive = nav?.classList.toggle("header__nav--active");
    hamburgerIcon?.classList.toggle("hamburger__icon--hidden", isActive);
    closeIcon?.classList.toggle("hamburger__icon--hidden", !isActive);
};

if (hamburger && nav && hamburgerIcon && closeIcon) {
    hamburger.addEventListener("click", toggleMenu);

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("header__nav--active");
            hamburgerIcon.classList.remove("hamburger__icon--hidden");
            closeIcon.classList.add("hamburger__icon--hidden");
        });
    });
}