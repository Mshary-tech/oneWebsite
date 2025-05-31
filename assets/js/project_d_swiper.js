// project status Swiper
const ps_swiper = new Swiper('.project-status-swiper', {
    allowTouchMove: true,
    preventClicks: true,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        430: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    pagination: { el: '.project-status-swiper-pagination', clickable: true }
});
ps_swiper.changeLanguageDirection('rtl');

// options swiper
const options_swiper = new Swiper('.options-swiper', {
    allowTouchMove: true,
    preventClicks: true,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    pagination: { el: '.options-swiper-pagination', clickable: true }
});
options_swiper.changeLanguageDirection('rtl');

var small_villa_img = new Swiper(".villa-img-swiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
small_villa_img.changeLanguageDirection('rtl');