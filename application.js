$(document).ready(function () {
$(".photo").on("click", function () {
	x = $(this).children("img").attr("src");
	$("#bbg").fadeIn(150);
	$("#bbg img").attr("src", x);
});
$("#bbg").on("click", function () {
	$("#bbg").fadeOut(150);
});
});