var lastShown;

$(".corp-card").on("click", function() {
	var str = "#" + $(this).attr('toShow');
	console.log(str);
	
	if (lastShown == str)
		return;
	
	if (lastShown)
		$(lastShown).slideUp(1000);
	$(str).slideDown(1000);
	
	lastShown = str;
});