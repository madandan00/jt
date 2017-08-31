$(".menue li").on("click", function() {
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".content ol").eq(index).show().siblings().hide()
})
$(".back").on("click", function() {
	window.history.back();
})