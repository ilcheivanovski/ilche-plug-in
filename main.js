$(function(){
	$("#circle").css({
			"background-color":"green",
			"opacity":"0.9",
			"border-radius":"800px",
			"width":"800px",
			"height":"800px"
		});
	$("#circle").on("mouseenter",function(){	
		$(this).hide(1000);
		$(this).animate({
			left: "+=50",
			height: "toggle"
			}, 5000, function() {
		});
	});
});