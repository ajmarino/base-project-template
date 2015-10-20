var Selector_Cache = require('../utilities/selector_cache');
var slidePage      = require('../utilities/slide_page.js');

// ===========================================================================================
// Main App
// ===========================================================================================
module.exports = function () {
	var cache = new Selector_Cache();

	var config = {
		page_target : $('body').data('target') ? $('body').data('target') : '#',
		page_width  : $(window).outerWidth()
	};


	/**
	 * Init the app
	 */
	console.log('Admin Init');
	

	// Toggle the sidebar
	$('#main-menu-toggle').click(function () {
		$('body').toggleClass('mmc');
	});


	// Add a click event to Admin sidebar
	$('.mm-dropdown').click(function () {
		$(this).toggleClass('open');
	});


	//  Used on lists to link to an edit page, vs having <a> in each <td>
	$('.js-link').click(function () {
		var url = $(this).data('url');

		window.location.href = url;
	});


	// Animates body to anchor tag on page
	$('.js-slide-page').click(function () {
		var target = $(this).attr('href');

		slidePage(target);

		if ($(this).data('focus') !== '' ) {
			var focus = $(this).data('focus');

			$(focus).focus();
		}
	});


	// Slides the page to a target is passed in the url on page load
	if ( config.page_target !== '#' ) {
		setTimeout(	slidePage( config.page_target ), 1500);
	}

	return {
		cache     : cache,
		config    : config
	};	
};

