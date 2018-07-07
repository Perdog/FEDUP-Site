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
	
	alreadySwitching = true;
	
	if (lastShown)
		$(lastShown).hide("slide", {direction: (ind > lastIndex ? "left" : "right")}, 500);
	
	setTimeout(function() {
		$(toShow).show("slide", {direction: (lastIndex ? (ind > lastIndex ? "right" : "left") : "left")}, 500, function() {
			lastShown = toShow;
			lastIndex = ind;
			alreadySwitching = false;
		});
	}, 525);
	
});