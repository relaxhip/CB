$(function(){
	$('.jssorr').slick({
	  // centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  speed: 3000,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	        // centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: true,
	        // centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	  ]
	});

})
	