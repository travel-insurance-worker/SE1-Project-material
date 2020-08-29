

(function($) {

    "use strict";

    const cfg = {
                scrollDuration : 800,
                mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc' // mailchimp url
                };
    const $WIN = $(window);



    const doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);




    const ssPreloader = function() {

        $("html").addClass('ss-preload');

        $WIN.on('load', function() {



            $("#loader").fadeOut("slow", function() {

                $("#preloader").delay(300).fadeOut("slow");
            });


            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');

        });
    };




    const ssPrettyPrint = function() {
        $('pre').addClass('prettyprint');
        $( document ).ready(function() {
            prettyPrint();
        });
    };




    const ssSlickSlider = function() {

        $('.intro-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });
    };




    const ssModal = function() {

        const modal = document.querySelector(".modal");
        const trigger = document.querySelector(".modal-trigger");
        const closeButton = document.querySelector(".modal__close");

        function toggleModal() {
            modal.classList.toggle("show-modal");
        }
        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }
        function pressEsc(event) {
            if (event.which=='27') {
                modal.classList.remove("show-modal");
            }
        }

        trigger.addEventListener("click", toggleModal);
        closeButton.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);
        window.addEventListener("keyup", pressEsc);

    };




    const ssFinalCountdown = function() {

        const finalDate = '2022/04/07';

        $('.counter').countdown(finalDate)
        .on('update.countdown finish.countdown', function(event) {

            const str = '<div class=\"counter__time days\">%D&nbsp;<span>D</span></div>' +
                        '<div class=\"counter__time hours\">%H&nbsp;<span>H</span></div>' +
                        '<div class=\"counter__time minutes\">%M&nbsp;<span>M</span></div>' +
                        '<div class=\"counter__time seconds\">%S&nbsp;<span>S</span></div>';

            $(this).html(event.strftime(str));

        });
    };




    const ssTabs = function() {

        const $tabNavListItems = $("ul.tab-nav__list li");
        const $tabContentItem  = $(".tab-content__item");

        $tabContentItem.hide().first().show();

        $tabNavListItems.on('click', function () {

            $tabNavListItems.removeClass("active");
            $(this).addClass("active");
            $tabContentItem.hide();

            const activeTab = $(this).attr("data-id");
            $("#" + activeTab).fadeIn(1000);

        });
    }



    const ssAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        });

    };




    const ssSmoothScroll = function() {

        $('.smoothscroll').on('click', function (e) {
            const target = this.hash;
            const $target = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {
                window.location.hash = target;
            });
        });

    };




    const ssBackToTop = function() {

        const pxShow      = 500;
        const $goTopButton = $(".ss-go-top")


        if ($(window).scrollTop() >= pxShow) $goTopButton.addClass('link-is-visible');

        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                if(!$goTopButton.hasClass('link-is-visible')) $goTopButton.addClass('link-is-visible')
            } else {
                $goTopButton.removeClass('link-is-visible')
            }
        });
    };




    const ssAjaxChimp = function() {

        $('#mc-form').ajaxChimp({
            language: 'es',
            url: cfg.mailChimpURL
        });



        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: '<i class="fas fa-check"></i> We have sent you a confirmation email',
            1: '<i class="fas fa-exclamation-triangle"></i> You must enter a valid e-mail address.',
            2: '<i class="fas fa-exclamation-triangle"></i> E-mail address is not valid.',
            3: '<i class="fas fa-exclamation-triangle"></i> E-mail address is not valid.',
            4: '<i class="fas fa-exclamation-triangle"></i> E-mail address is not valid.',
            5: '<i class="fas fa-exclamation-triangle"></i> E-mail address is not valid.'
        }
    };




    (function ssInit() {

        ssPreloader();
        ssPrettyPrint();
        ssSlickSlider();
        ssModal();
        ssFinalCountdown();
        ssTabs();
        ssAlertBoxes();
        ssSmoothScroll();
        ssBackToTop();
        ssAjaxChimp();

    })();

})(jQuery);
