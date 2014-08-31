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

    $('.nav__link--folder').click(function () {
        $(this).toggleClass('nav__link--subnav-open');
        $(this).next().slideToggle().toggleClass('nav--closed').toggleClass('nav--open');
    });

    // Bootstrap Table Class
    $('table').addClass('table');

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

    // Catch browser resize
    $(window).resize(function () {
        // Remove transition inline style on large screens
        if ($(window).width() >= 768)
            $('#sub-nav-collapse').removeAttr('style');
    });
});

//Fix GitHub Ribbon overlapping Scrollbar
var t = $('#github-ribbon');
if (t[0] && $('article')[0].scrollHeight > $('.right-column').height()) t[0].style.right = '16px';

//Toggle Code Block Visibility
function toggleCodeBlocks() {
    var t = localStorage.getItem("toggleCodeStats")
    t = (t + 1) % 3;
    localStorage.setItem("toggleCodeStats", t);
    var a = $('.content-page article');
    var c = a.children().filter('pre');
    var d = $('.right-column');
    if (d.hasClass('float-view')) {
        d.removeClass('float-view');
        $('#toggleCodeBlockBtn')[0].innerHTML = "Hide Code Blocks";
    } else {
        if (c.hasClass('hidden')) {
            d.addClass('float-view');
            c.removeClass('hidden');
            $('#toggleCodeBlockBtn')[0].innerHTML = "Show Code Blocks Inline";
        } else {
            c.addClass('hidden');
            $('#toggleCodeBlockBtn')[0].innerHTML = "Show Code Blocks";
        }
    }
}

if (localStorage.getItem("toggleCodeStats") >= 0) {
    var t = localStorage.getItem("toggleCodeStats");
    if (t == 1) {
        toggleCodeBlocks();
        localStorage.setItem("toggleCodeStats", 1);
    }
    if (t == 2) {
        toggleCodeBlocks();
        toggleCodeBlocks();
        localStorage.setItem("toggleCodeStats", 2);
    }
} else {
    localStorage.setItem("toggleCodeStats", 0);
}