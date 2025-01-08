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

document.addEventListener("DOMContentLoaded", () => {
    const playButtons = document.querySelectorAll(".section__btn-play--fr");

    playButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Trouver la vidéo associée
            const video = button.previousElementSibling.querySelector("video");

            if (video) {
                if (video.paused) {
                    video.play();
                    button.innerHTML = 'Arrêter la vidéo <img class="logo__play" src="/assets/img/webp/logo_play.webp" alt="Play Icon">' // Attribut pour indiquer l'état
                } else {
                    video.pause();
                    button.innerHTML = 'Lancer la vidéo <img class="logo__play" src="/assets/img/webp/logo_play.webp" alt="Play Icon">' // Attribut pour indiquer l'état
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const playButtonsEn = document.querySelectorAll(".section__btn-play--en");

    playButtonsEn.forEach((buttonEn) => {
        buttonEn.addEventListener("click", () => {
            // Trouver la vidéo associée
            const video = buttonEn.previousElementSibling.querySelector("video");

            if (video) {
                if (video.paused) {
                    video.play();
                    buttonEn.innerHTML = 'Pause Video <img class="logo__play" src="/assets/img/webp/logo_play.webp" alt="Play Icon">' // Attribut pour indiquer l'état
                } else {
                    video.pause();
                    buttonEn.innerHTML = 'Play Video <img class="logo__play" src="/assets/img/webp/logo_play.webp" alt="Play Icon">' // Attribut pour indiquer l'état
                }
            }
        });
    });
});


