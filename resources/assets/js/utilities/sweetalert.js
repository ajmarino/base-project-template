/**
 * Shows an alert to the user using the Sweet Alert library

 * @param  {string} title     - alert title
 * @param  {string|array} msg - single or group of messages
 * @param  {string} type      - type of alert to show, styling
 * @param  {string} button    - text of button in modal to dismiss
 * 
 * @return {false} shows the alert
 */
module.exports = function(title, msg, type, button) {
	var btn = button || 'Ok';

	swal({
		title: title,
		text: msg,
		type: type,
		confirmButtonText: btn,
		allowEscapeKey: true,
		allowOutsideClick: true,
		html: true
	});
	

	return false;
};