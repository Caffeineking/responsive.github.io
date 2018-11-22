

  $("#learnmore").click(function(e) {
	e.preventDefault();
	
	var position = $("#recentwork").offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});