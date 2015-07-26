/**
 * Slides the page to a specific location
 * 
 * @param  {string} anchor - id of div to slide too
 */
module.exports = function (anchor) {
	$("html, body").animate(
		{
			scrollTop: $(anchor).offset().top - 24 + "px"
		},{
			duration: 500,
			easing: "swing"
		}); 
	
	return false;
};