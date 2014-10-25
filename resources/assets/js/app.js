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

	App.init();
});

/**********************************************************************************************
 * Main App
 * *******************************************************************************************/
var App = function () {
	/**
	 * Init the app
	 */
	var init = function () {
		console.log("Init");
	};


	/**********************************************************************************************
	 * AVAILABLE TO GLOBAL SCOPE
	 * *******************************************************************************************/
	return {
		init : init
	};

}();