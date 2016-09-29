/**
 * Slides the page to a specific location
 * 
 * @param  {string} anchor - id of div to slide too
 *
 * @return {false} scrolls pages to anchor
 */
module.exports = anchor => {
	$('html, body').animate(
		{
			scrollTop: $(anchor).offset().top - 24 + 'px'
		},{
			duration: 500,
			easing: 'swing'
		}); 
	
	return false;
};