$(document).ready(function(){
	$('.owl-carousel.banner-wrapper').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    items:1,
	    navText:false,
	    autoplay:true,
		autoplayTimeout:3000
	});

	$('.outer-prod .owl-carousel').owlCarousel({
	    /*loop:true,*/
	    nav:true,
	    navText:false,
	    autoplay:true,
	    margin:10,
		autoplayTimeout:3000,
		 responsive:{
		 	320:{
	            items:1
	        },
		 	481:{
	            items:2
	        },
		 	768:{
	            items:3
	        },
	        992:{
	            items:4
	        }
    	}
	});

	$(".hambourger-menu a").click(function(){
		if ($('body').hasClass('mobile-menu')) {
		  	$('body').removeClass('mobile-menu');
		  		} else {
		  	$('body').addClass('mobile-menu');
		}
	});
});

$(window).scroll(function(e) {
	if($(document).width() > 767) {
		if ($(window).scrollTop() > 0) {
			$('body').addClass('small-header');
		} else {
		  	$('body').removeClass('small-header');
		}
	}
});


$(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
      
      // Items that are "above the fold"
			if (($animatable.offset().top + $animatable.height() + 50) < offset) {
        
        // Item previously wasn't marked as "above the fold": mark it now
        if (!$animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
        }

			}
      
      // Items that are "below the fold"
      else if (($animatable.offset().top + $animatable.height() + 50) > offset) {
        
        // Item previously wasn't marked as "below the fold": mark it now
        if ($animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
        }

      }

    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});