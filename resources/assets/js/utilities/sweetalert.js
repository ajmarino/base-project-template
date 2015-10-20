module.exports = function(title, msg, type, button) {
	var btn = button || "Ok";

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