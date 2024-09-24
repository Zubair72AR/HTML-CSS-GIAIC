/*///////////////////////////////////////////////////////*/
/* Navbar Container Start Here */
/*///////////////////////////////////////////////////////*/
let navLinkElements = document.querySelectorAll(".nav__link");

navLinkElements.forEach((navLinkEl) => {
  navLinkEl.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLinkElements.classList.add("active");
  });
});
