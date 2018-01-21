$(document).ready(function () {

    // adjust home height
    $('.home').height($(window).height());

    // trigger tooltip
    $('[data-toggle="tooltip"]').tooltip();


    // trigger trainers slider
    $('.trainers-slider .bxslider').bxSlider({
        pager: false,
        auto: true,
        autoControls: true,
        pause: 2000,
        autoHover: true,
        controls: false

    });

    // trigger gallery slider
    $('.gallery .bxslider').bxSlider({
        slideWidth: 250,
        maxSlides: 3,
        minSlides: 3,
        slideMargin: 2,
        pager: false,
        auto: true,
        autoControls: true,
        pause: 4000,
        autoHover: true
    });

    //trigger wow.js
    new WOW().init();


    // tweets slider
    (function autoSlide() {
        $('.tweet p.active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(3000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn(2000);
                    autoSlide();
                });
            } else {
                $(this).delay(3000).fadeOut(3000, function () {
                    $(this).removeClass('active');
                    $('.tweet p').eq(0).addClass('active').fadeIn(2000);
                    autoSlide();
                })
            }
        })

    }());


});
