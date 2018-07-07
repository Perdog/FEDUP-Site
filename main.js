var lastShown;
var lastIndex;

$(".corp-card").on("click", function() {
	var str = "#" + $(this).attr('toShow');
	var ind = Number($(this).attr('index'));
	console.log(str);
	console.log(ind);
	
	if (lastShown == str)
		return;
	
	if (lastShown)
		$(lastShown).hide("slide", {direction: (ind > lastIndex ? "left" : "right")}, 500);
	
	setTimeout(function() {
		$(str).show("slide", {direction: (lastIndex ? (ind > lastIndex ? "right" : "left") : "left")}, 500);
		
		lastShown = str;
		lastIndex = ind;
	}, 510);
	
});