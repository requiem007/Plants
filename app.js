"use strict";

// ==============BURGER================================================

const burgerIcon = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".header__nav");

if (burgerIcon) {
    burgerIcon.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        burgerIcon.classList.toggle("menu-open");
        menuBody.classList.toggle("menu-open");
    });
}
// ==============SPOLLERS================================================

const spollersArray = document.querySelectorAll("[data-spollers]");

if (spollersArray > 0) {
    //  получаем спойлеры в массив
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
}

console.log(spollersArray);
console.log(spollersRegular);
