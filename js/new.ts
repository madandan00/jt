//$(
//	function(){
//		var ad=location.href;
//		
//		var url=ad.slice(0,ad.length-5)
//		
//		location.assign(url+"?"+"id=1.html")
//		alert(location.search)
//	}
//)
//$(".new-class li").on("click", function() {
//	$(this).addClass("active").siblings().removeClass("active");
//	$.ajax({
//		type:"get",
//		url:"",
//		success:function(data){
////			var html='<a href="newContent.html">'+
////					'<dl class="newTittle">'+
////						'<dt><i class="iconfont icon-youjiantou"></i></dt>'+
////						'<dd class="headLine">"'{{}}'"</dd>'+
////						'<dd class="time">"'{{}}'"</dd>'+
////					'</dl>'+
////				'</a>'
//				
//			$(html).appendTo(".news");	
//		}
//	});
//})

//$('.pagination').jqPagination({
//	link_string: '/?page={page_number}',
//	current_page: 1, //设置当前页 默认为1
//	max_page: 40, //设置最大页 默认为1
//	page_string: '第{current_page}页,共{max_page}页',
//	paged: function(page) {
//		//回发事件。。。
//		//alert(page)
//		var ad=location.href
//		var end=ad.indexOf(".html")
//		var url=ad.slice(0,end)
//		
//		location.assign(url+"-"+page+".html")
//		alert(location.href)
//	}
//});
//分页插件
$(".holder").jPages({
	containerID: "itemContainer",
	first: '首页',
	last: '尾页',
	previous: '上一页',
	next: '下一页',
	perPage: 1,
	startPage: 1,
	startRange: 1,
	midRange: 3,
	endRange: 1,
	animation: 'wobble',
	keyBrowse: true,
	callback: function(pages, items) {
		//			$("#page-panel").html("当前页面:" + pages.current);
		//$("#page-pane2").html("共" + pages.count + "页");
		//$("#page-pane3").html("共" + items.count+"页");
		//			$("#page-pane4").html("每页数量:" + items.count / pages.count);

	}
});