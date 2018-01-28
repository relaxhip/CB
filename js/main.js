$(function(){
	//下拉選單
	$(".father-ul").find("ul").hide();
	$(".father-li").hover(function(){
		$(this).find("ul").stop().slideToggle();
	});

	//漢堡表單
	$('.hamburger').click(function(){
		$(this).toggleClass("hamburger-x");
		$(".father-ul").slideToggle("display");
	});
	$(window).resize(function(){
		let w = $(window).width();
		if(w>944){
			$(".hamburger").next().show();
		}else{
			$(".hamburger").next().hide();
			$(".hamburger").removeClass("hamburger-x");
		}
	});
	//里程碑
	$(".mile-article").delay(500).slideDown(2000);

	//award
	$(".new").hide();
	$(".new1").delay(500).fadeIn(1500);
	$(".new2").delay(2000).fadeIn(1500);
	$(".new3").delay(3500).fadeIn(1500);
	$(".new4").delay(5000).fadeIn(1500);

	$(".award-content").delay(1000).slideDown(6000);

	//idea
	$(".idea-content").hide()
	$(".idea-content").slideDown(10000);
	$(".idealogo").delay(10000).fadeIn(1000);

	//FAQ
	$(".box").find("h5").hide();
	$(".box").find("ul").hide();
	$(".box").find("h3").click(function(){
		// $(".box h5").slideToggle();
		$(this).next().stop().slideToggle();
	});

	//Buy
	$(".box-b").find(".content").hide();
	$(".box-b").find("h2").click(function(){
		// $(".box h5").slideToggle();
		$(this).next().stop().slideToggle();
	});
});