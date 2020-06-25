; (function () {
	"use strict";

	$('.ba-works__slider').slick({
		slide: '.ba-works__item',
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow: '[data-works-left]',
		nextArrow: '[data-works-right]',
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				 slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				 slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		 ]
		// easing: true,
	})
})();

