$(window).scroll(function(){
	parallax();
	shrink();
})

function parallax()
{
	var w3Scroll = $(window).scrollTop();
	if( w3Scroll > 0 )
	{
		$(".parallax").css("background-position","center " + ( w3Scroll * 0.05 )+"px");
	}
	
}

var wPosition = 200;

function shrink()
{
	var w3Scroll = $(window).scrollTop();
	if( w3Scroll > wPosition )
	{
		$(".top-nav").css("background-color","rgba(0,0,0,0.8)");
		$(".top-nav").css("padding","14px");
		$(".top-nav a").css("color","white");		
	}

	else
	{
		$(".top-nav").css("background-color","white");
		$(".top-nav").css("padding","17px");
		 $(".top-nav a").css("color","black");		
	}

	wPosition = w3Scroll;
}

$('.loader').hide();

$(window).load(function() {
   $('.loader').show();
   $('.loader').fadeOut('slow');
});