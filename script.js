$(document).ready(function(){
	initeSlider();
})

function initeSlider(){
	var page = 0;
	var totalPages = $(".sliderSheet").length;
	console.log($(".next"));
	$(".next").click(function(){
		goTo(false);
	});
	$(".preview").click(function(){
		goTo(true);
	})
	window.setInterval(function(){
		var lastPage = page;
		page = page >= 4 ? 0 : page + 1;
		goTo();
	},6000)
}
function goTo(reverse){
	if (reverse){
		$(".pagesContainer").prepend($(".sliderSheet")[$(".sliderSheet").length-1]);
		$(".pagesContainer").css({
			left: "-100%"
		})
		$(".pagesContainer").animate({
			left: 0
		},300)
	} else {
		$(".pagesContainer").animate({
			left: "-100%"
		},300, function(){
			$(".pagesContainer").append($(".sliderSheet")[0]);
			$(".pagesContainer").css({
				left: 0
			})		
		})
	}
}
