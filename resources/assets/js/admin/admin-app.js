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


/**
 * Creates a cache of jQuery selectors for faster processing
 *
 * http://ttmm.io/tech/selector-caching-jquery/
 * https://gist.github.com/jtsternberg/14978579a9edf42ed069
 */
function Selector_Cache() {
	var elementCache = {};
 
	var get_from_cache = function( selector, $ctxt, reset ) {
 
		if ( 'boolean' === typeof $ctxt ) { reset = $ctxt; }
		var cacheKey = $ctxt ? $ctxt.selector + ' ' + selector : selector;
 
		if ( undefined === elementCache[ cacheKey ] || reset ) {
			elementCache[ cacheKey ] = $ctxt ? $ctxt.find( selector ) : jQuery( selector );
		}
 
		return elementCache[ cacheKey ];
	};
 
	get_from_cache.elementCache = elementCache;
	return get_from_cache;
}





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
		console.log("Admin Init");

		var cache = new Selector_Cache();

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