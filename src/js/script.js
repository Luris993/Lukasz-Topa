$(document).ready(function() { 
   
   
//     shrink nav
   
   $(window).on('scroll', function(){
    if ($(window).scrollTop()){
      $('nav').addClass('view-nav');
    }
    else {
      $('nav').removeClass('view-nav');
    }
  })

//     smooth scroll 
   
   
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: (target.offset().top -  70)
			}, 1000);
       
       $('nav ul').removeClass('show');
        return false;
		}
	});
   
   
   $('.hamburger').on('click', function(){
        $('nav ul').toggleClass('show');
    });
   
   
//     scroll to top button 
   
   var btn = $('#scrollTopButton');

   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('scrollTopShow');
     } else {
       btn.removeClass('scrollTopShow');
     }
   });

   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });


});