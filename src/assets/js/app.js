//= ../../../node_modules/slick-carousel/slick/slick.js

$(function () {

    // Search
    $('.search__btn').on('click', function () {
        $('.search__form').toggleClass('active');
        $('.search__btn').toggleClass('active');
    });

    // Languages
    $('.languages__btn').on('click', function (evt) {
        evt.preventDefault();
        $('.languages__sublist').toggleClass('active');
        $('.languages__btn_arrow').toggleClass('active');
    });

    // Mobile Menu
    $('#hamburger').on('click', function (evt) {
        evt.preventDefault();
        $('.mobile-menu__list').toggleClass('active');
        $('.hamburger').toggleClass('active');
    });

    // Mobile Menu Categories
    $('#menu-categories').on('click', function (evt) {
        evt.preventDefault();
        $('.menu-categories').toggleClass('active');
        $('.categories-icon').toggleClass('active');
    });

    $('#intro-slides').slick({
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('#intro-slides-arrows-prev'),
        nextArrow: $('#intro-slides-arrows-next'),
    });

    // Popular slides
    $('#popular-products-slides').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('#products-slides-arrows-prev'),
        nextArrow: $('#products-slides-arrows-next'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // Articles slides
    $('#articles-slides').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#articles-slides-arrows-prev'),
        nextArrow: $('#articles-slides-arrows-next'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});