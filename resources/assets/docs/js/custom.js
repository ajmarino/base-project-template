$(function () {
    hljs.initHighlightingOnLoad();
    
    var $body = $('html, body'),
        content = $('#main').smoothState({

            // Runs when a link has been activated
            onStart: {
                duration: 500, // Duration of our animation
                render: function (url, $container) {
                    // toggleAnimationClass() is a public method
                    // for restarting css animations with a class
                    content.toggleAnimationClass('is-exiting');

                    // Scroll user to the top
                    $body.animate({
                        scrollTop: 0
                    });
                }
            }
        }).data('smoothState');


    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });


    $('#toggleCodeBlocks').click(function () {
        if ( $(this).attr("data-state") === "visible" ) {
            $('.page .pre').slideUp();
            $('.page pre.code').slideUp();
            $(this)
                .attr("data-state", "hidden")
                .text("Show Code Blocks");
        } else {
             $('.page .pre').slideDown();
             $('.page pre.code').slideDown();
            $(this)
                .attr("data-state", "visible")
                .text("Hide Code Blocks");
        }
    });



    $('.nav__link--folder').click(function () {
        $(this).toggleClass('nav__link--subnav-open');
        $(this).next().slideToggle().toggleClass('nav--closed').toggleClass('nav--open');
    });



    // Responsive menu spinner
    $('.toggle-menu').click(function (e) {
        e.preventDefault();
        $('.container').toggleClass("nav--open");

        if ( $('.btn--nav .fa').hasClass('fa-bars') ) {
            $('.btn--nav .fa').removeClass('fa-bars').addClass('fa-times');
        } else {
             $('.btn--nav .fa').removeClass('fa-times').addClass('fa-bars');
        }
    });
});