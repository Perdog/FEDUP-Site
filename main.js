var lastShown = "#xmeta-info";
var lastIndex = 1;
var alreadySwitching = false;

$(".corp-button").on("click", function() {
	if (alreadySwitching)
		return;
	
	var toShow = "#" + $(this).attr('toShow');
	var ind = Number($(this).attr('index'));
	console.log(toShow);
	console.log(ind);
	
	if (lastShown == toShow)
		return;
	
	/*
	$(lastShown).hide("slide", {direction: (ind > lastIndex ? "left" : "right")}, 500, function() {
		$(toShow).show("slide", {direction: (lastIndex ? (ind > lastIndex ? "right" : "left") : "left")}, 500, function() {
			lastShown = toShow;
			lastIndex = ind;
			alreadySwitching = false;
		});
	});
	*/
	if (ind > lastIndex) {
		alreadySwitching = true;
		$(lastShown).animate(
							{
								// Fade out to the left
								left: 0 - $(lastShown).width(),
								opacity: "hide",
							},
							{
								duration: "2000",
								easing: "linear",
								complete: function()
								{
									// Set position to far right
									$(toShow).css("left", "100%");
									$(toShow).animate(
													{
														// Slide in to middle
														left: "50%",
														opacity: "show",
													},
													{
														duration: "2000",
														easing: "linear",
														complete: function()
														{
															lastShown = toShow;
															lastIndex = ind;
															alreadySwitching = false;
														},
													});
								},
							});
	} else {
		alreadySwitching = true;
		$(lastShown).animate(
							{
								// Fade out to the right
								left: $(document).width(),
								opacity: "hide",
							},
							{
								duration: "2000",
								easing: "linear",
								complete: function()
								{
									// Set position to far right
									$(toShow).css("right", "100%");
									$(toShow).animate(
													{
														// Slide in to middle
														left: "50%",
														opacity: "show",
													},
													{
														duration: "2000",
														easing: "linear",
														complete: function()
														{
															lastShown = toShow;
															lastIndex = ind;
															alreadySwitching = false;
														},
													});
								},
							});
	}
});