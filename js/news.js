
$(".holder").jPages({
	containerID: "itemContainer",
	first: '首页',
	last: '尾页',
	previous: '上一页',
	next: '下一页',
	perPage: 10,
	startPage: 1,
	startRange: 1,
	midRange: 3,
	endRange: 1,
	animation: 'wobble',
	keyBrowse: true,
	callback: function(pages, items) {

	}
});