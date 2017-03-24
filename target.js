jQuery('.navigation a').on( 'click', function(event) {
	var target 	= jQuery( this );
    var element = target.attr('href');

    jQuery('.navigation a').removeClass('active')
    target.addClass('active');

    jQuery("body, html").animate({ 
      scrollTop: jQuery( element ).offset().top - 90	
    }, 800);

});
