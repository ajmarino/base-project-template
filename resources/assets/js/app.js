var selector_cache = require('./utilities/selector_cache');
var slidePage      = require('./utilities/slide_page');
var sAlert         = require('./utilities/sweetalert');
// var debouncer      = require('./utilities/debouncer.js');

// ===========================================================================================
// Main App
// ===========================================================================================
module.exports = function () {
	var cache = new selector_cache();

	var config = {
		page_target : $('body').data('target') ? $('body').data('target') : "#",
		page_width  : $(window).outerWidth()
	};


	// 
	// Init the app
	// 
	console.log("Init");
	

	// Prevents links starting with # from moving page
	$('a[href^=#]').click(function (e) {
		e.preventDefault();
	});
	

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


	

	return {
		cache     : cache,
		config    : config
	};	
};