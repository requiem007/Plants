// ==============BURGER================================================
export function burger() {
    const burgerIcon = document.querySelector(".icon-menu");
    const menuBody = document.querySelector(".header__nav");

    if (burgerIcon) {
        burgerIcon.addEventListener("click", function (e) {
            document.body.classList.toggle("lock");
            burgerIcon.classList.toggle("menu-open");
            menuBody.classList.toggle("menu-open");
        });
    }
}
