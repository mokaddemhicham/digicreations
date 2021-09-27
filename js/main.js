/* =================================================

 Template Name:  Keira - One Page Portfolio Template
 Author: MouriThemes
 Version: 1.0
 Design and Developed by: MouriThemes

 NB: This is the main js of this theme.

 =================================================== */

 (function($) {
    'use strict';

    jQuery(document).ready(function($) {
        //*********** Animated headline js

        $('.animate-scale').animatedHeadline({
            animationType: 'clip'
        });

        //***** Skill bar js

        var skillbar = $(".skillbar");

        skillbar.waypoint(function () {
            skillbar.each(function () {
                $(this).find(".skillbar-child").animate({
                    width: $(this).data("percent")
                }, 1000);
            });
        }, {
            offset: "80%"
        });


        //*************** wow js

        new WOW().init();

        //************** counter js

        // countUp
        $('.count').countUp({
            delay: 10,
            time: 1500
        });


        //************ smooth scroll js

        $('a.smooth-menu').on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
        });

        //*********** scrollspy js

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });


        //************ Magnific Popup

        $('.zoom1').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        //************ Testimonial Carousel

        var $testCarousel = $('#testimonial-carousel');
        if ($testCarousel.length > 0) {
            $testCarousel.owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                autoplay: true,
                dots: false,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    1170: {
                        items: 1
                    }
                }
            });
        }

        //************ Client Carousel

        var $clientCarousel = $('#client-carousel');
        if ($clientCarousel.length > 0) {
            $clientCarousel.owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                autoplay: true,
                dots: false,
                autoplayTimeout: 2500,
                smartSpeed: 250,
                responsive: {
                    0: {
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    1170: {
                        items: 5
                    }
                }
            });
        }

        //*************** Isotope filter

        var $Container = $('#img-filter');
        if( $Container.length>0 ) {
            $Container.isotope({
                itemSelector: '.single-port',
                transitionDuration: '0.8s'
            });
            $(".img-filter").on("click", function (e){
                $(".img-filter.active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $Container.isotope({
                    filter: selector
                });
                return false;
            });

            $(window).resize(function(){
                setTimeout(function(){
                    $Container.isotope();
                },1000);
            }).trigger('resize');
        }


    });



    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
            $('#logo')[0].src = 'images/home/black_logo-01.png';
        } else {
            menu_area.removeClass('sticky_navigation');
            $('#logo')[0].src = 'images/home/Logo.png';
        }
    });


    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);


    // con-right-accordion
    var $active = $("#con-right-accordion .panel-collapse.in")
        .prev()
        .addClass("active");

    $active
        .find("a")
        .append("<span class=\"fa fa-minus pull-left\"></span>");

    $("#con-right-accordion .panel-heading")
        .not($active)
        .find('a')
        .prepend("<span class=\"fa fa-plus pull-left\"></span>");

    $("#con-right-accordion").on("show.bs.collapse", function (e) {
        $("#con-right-accordion .panel-heading.active")
            .removeClass("active")
            .find(".fa")
            .toggleClass("fa-plus fa-minus");
        $(e.target)
            .prev()
            .addClass("active")
            .find(".fa")
            .toggleClass("fa-plus fa-minus");
    });

    $("#con-right-accordion").on("hide.bs.collapse", function (e) {
        $(e.target)
            .prev()
            .removeClass("active")
            .find(".fa")
            .removeClass("fa-minus")
            .addClass("fa-plus");
    });


})(jQuery);



