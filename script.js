$(document).ready(function(){
	initeSlider();
})

function initeSlider(){
	var page = 0;
	var totalPages = $(".sliderSheet").length;
	window.setInterval(function(){
		var lastPage = page;
		page = page >= 4 ? 0 : page + 1;
		goTo(page, lastPage);
	},2000)
}
function goTo(page){
	$(".pagesContainer").animate({
		left: "-100%"
	},300, function(){
		$(".pagesContainer").append($(".sliderSheet")[0]);
		$(".pagesContainer").css({
			left: 0
		})		
	})
}
