$(".pros").on("click", function() {
	if($(this).find("i").hasClass("icon-youjiantou")) {
		$(this).find("i").addClass("icon-xia").removeClass("icon-youjiantou")
		$(this).addClass("active")
	} else {
		$(this).find("i").addClass("icon-youjiantou").removeClass("icon-xia")
		$(this).removeClass("active")
	}
	$(this).find(".ans").toggle()
})