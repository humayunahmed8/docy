jQuery(document).ready(function ($) {

    // Faq Video Slider 
    $('.docy-faq-videos-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='ei ei-arrow_carrot-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='ei ei-arrow_carrot-right' aria-hidden='true'></i></button>",
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


    // Modal Slider 

    $('#slideModal').on('shown.bs.modal', function () {
        $('.faq-modal-main-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            centerPadding: '0px',
            //autoplay: true,
            centerMode: true,
            //autoplaySpeed: 2000,
            asNavFor: '.slider-nav',
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='ei ei-arrow_carrot-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='ei ei-arrow_carrot-right' aria-hidden='true'></i></button>",
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            }]
        }).on('afterChange', function () {
            console.log($(".slick-active"));
            $(".slick-active").prev().removeClass('nextdiv').addClass('prevdiv');
            $(".slick-active").next().removeClass('prevdiv').addClass('nextdiv');
        });


        $(".faq-modal-main-slider .slick-center").prev().addClass('prevdiv');
        $(".faq-modal-main-slider .slick-center").next().addClass('nextdiv');

        $('.faq-modal-main-slider .slick-center').on('init', function () {
            $(".faq-modal-main-slider .slick-active").prev().removeClass('nextdiv').addClass('prevdiv');
            $(".faq-modal-main-slider .slick-active").next().removeClass('prevdiv').addClass('nextdiv');
        });

        $('.slider-nav').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.faq-modal-main-slider',
            variableWidth: false,
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '30px',
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='ei ei-arrow_carrot-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='ei ei-arrow_carrot-right' aria-hidden='true'></i></button>",
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    });

    // Modal Social Icon Toggle 
    $(".social-icon-toolbar").click(function () {
        $(this).toggleClass("active");
        $(".social-icon-list").toggleClass("social-icon-close");
    });

    // Mobile Menu Toggle Class 
    jQuery(".menu-btn").click(function() {
        jQuery(this).toggleClass("is-active");
    });

});
