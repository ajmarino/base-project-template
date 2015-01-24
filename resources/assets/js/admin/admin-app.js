$(function () {
	/**
	 * Tries to prevent 'console' errors in browsers that lack a console
	 */
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'
		];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}

	Admin.init();
});

/**********************************************************************************************
 * Main App
 * *******************************************************************************************/
var Admin = function () {
	var config = {
		page_target : $('body').data('target') ? $('body').data('target') : "#",
		page_width  : $(window).outerWidth()
	};


	/**
	 * Init the app
	 */
	var init = function () {
		console.log("Init");


		// Animates body to anchor tag on page
		$('.js-slide-page').click(function () {
			var target = $(this).attr('href');

			slidePage(target);

			if ($(this).data('focus') !== "" ) {
				var focus = $(this).data('focus');

				$(focus).focus();
			}
		});


		// Slides the page to a target is passed in the url on page load
		if ( config.page_target !== "#" ) {
			setTimeout(	slidePage( config.page_target ), 1500);
		}
	};



	/**
	 * Slides the page to a specific location
	 * 
	 * @param  {string} anchor - id of div to slide too
	 */
	var slidePage = function (anchor) {
		$("html, body").animate(
			{
				scrollTop: $(anchor).offset().top - 24 + "px"
			},{
				duration: 500,
				easing: "swing"
			}); 
		return false;
	};


	/**********************************************************************************************
	 * AVAILABLE TO GLOBAL SCOPE
	 * *******************************************************************************************/
	return {
		config    : config,
		init      : init,
		slidePage : slidePage
	};

}();