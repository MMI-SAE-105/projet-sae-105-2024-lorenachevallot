/* menu */

const toggle = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__menu");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "false";
        const isClosed = !isOpen;
        toggle.ariaExpanded = isOpen;
        nav.ariaExpanded = isClosed;
        page.classList.toggle("noscroll", isClosed);
    });
}


/* carrousel */

document.addEventListener("DOMContentLoaded", () => {
    const carrouselContainer = document.querySelector(".section__carrousel-container");
    const btnLeft = document.querySelector(".hero__scroll-carrousel--left");
    const btnRight = document.querySelector(".hero__scroll-carrousel--right");

    const cardWidth = carrouselContainer.querySelector(".section__carrousel").offsetWidth;

    btnRight.addEventListener("click", () => {
        carrouselContainer.scrollBy({
            left: cardWidth,
            behavior: "smooth",
        });
    });

    btnLeft.addEventListener("click", () => {
        carrouselContainer.scrollBy({
            left: -cardWidth,
            behavior: "smooth",
        });
    });
});

