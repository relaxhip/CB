$(function(){
	$(".father-ul").find("ul").hide();
	$(".father-li").hover(function(){
		$(this).find("ul").slideToggle();
	});
});