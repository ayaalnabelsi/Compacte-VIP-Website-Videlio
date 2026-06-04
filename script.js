const btn = document.querySelector(".accessibility-toggle");
const menu = document.querySelector("#a11y-menu");

btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
});