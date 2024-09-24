"use strict";
/*///////////////////////////////////////////////////////*/
/* Navbar Container Start Here */
/*///////////////////////////////////////////////////////*/
let navLinkElements = document.querySelectorAll(".nav__link");
navLinkElements.forEach((navLinkEl) => {
    navLinkEl.addEventListener("click", () => {
        var _a;
        (_a = document.querySelector(".active")) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
        navLinkElements.classList.add("active");
    });
});
