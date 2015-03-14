function random_range(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function randomize_position(i, obj) {

	$(obj).css('margin-top', random_range(40, 140) + "px");
	tilt_degs = "rotate(" + random_range(-40, 41) + "deg)";
	$(obj).css('transform', tilt_degs);
	$(obj).css('-webkit-transform', tilt_degs);
	$(obj).css('-moz-transform', tilt_degs);
	$(obj).css('-o-transform', tilt_degs);
	$(obj).show();
}

$(window).load(function()
{
    $.each($(".tool_logo"), randomize_position);
});