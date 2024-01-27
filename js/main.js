let burgerMenu = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".header-actions");
let bannerItem = document.querySelectorAll(".banner-item");
let playBtn = document.querySelector(".play");
let video = document.querySelector(".discovery-video");

burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    burgerMenu.classList.toggle("show");
});

window.addEventListener("DOMContentLoaded", () => {
    bannerItem.forEach((el) => {
        el.style = `transform: translateX(0);
                    opacity: 1`;
    });
});

playBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playBtn.style.display = "none";
    } else {
        video.pause();
        playBtn.style.display = "block";
    }
});

video.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playBtn.style.display = "none";
    } else {
        video.pause();
        playBtn.style.display = "block";
    }
});

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 47,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: true,
});

var swiper = new Swiper(".testimonial-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});


const title = document.querySelector(".banner-info_title");
let str = title.innerHTML;
title.textContent = "";


function typing(i = 0) {
    title.textContent += str[i];
    i++;

    if (i < str.length) {
        setTimeout(() => {
            typing(i);
        }, 20);
    }
}

typing();