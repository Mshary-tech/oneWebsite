// show and hide villa images slider
$(".x-close-title").on("click", function(e) {
    $(".villa-images-content").css('display', "none");
});
$(".overlay-villa-images").on("click", function(e) {
    $(".villa-images-content").css('display', "none");
});

// close villa details screen
$(".overlay-villa").on("click", function(e) {
    $(".villa-details-content").css("display", "none");
});
$(".villa-details-close-btn").on("click", function(e) {
    $(".villa-details-content").css("display", "none");
});

// show villa images
function show_images(i) {
    $("#villa-img-" + i).css('display', "flex");

    // Villa image swiper
    var swiper = new Swiper("#villa-image-thumb-" + i, {
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                spaceBetween: 1,
                slidesPerView: 50,
            },
            420: {
                spaceBetween: 5,
                slidesPerView: 40,
            },
            576: {
                spaceBetween: 10,
                slidesPerView: 20,
            },
        }
    });

    var swiper2 = new Swiper("#villa-image-swiper-" + i, {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

// show details
function show_details(i)
{
    change_floor(i);
    $("#villa-" + i).css("display", "flex");
}

// this function will change the villa details for change floors
function change_floor(i)
{
    var villa_list = document.querySelectorAll("#villa-" + i + " .villa-list");
    var villa_btn = document.querySelectorAll("#villa-" + i + " .villa-btn");
    
    villa_btn.forEach((_, index) => {
        villa_btn[index].onclick = () => {
            for (let i = 0; i < 3; i++) {
                villa_btn[i].classList.remove("fill-btn");
                villa_list[i].classList.remove("active");
            }
            villa_btn[index].classList.add("fill-btn");
            villa_list[index].classList.add("active");
        }
    });
}
