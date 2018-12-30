$(window).scroll(function(){
	parallax();
	shrink();
	
	var w3Scroll = $(window).scrollTop();
	var intro = $(".intro-content");
	var intro_position = intro.position();
	if ( w3Scroll = intro_position )
	{
		$(".intro-content").addClass("animate-fadeIn");				
	}	

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
		// $(".top-nav").css("background-color","rgba(0,0,0,0.8)");
		$(".top-nav").css("padding","2px");
		//$(".top-nav a").css("color","white");		
	}

	else
	{
		$(".top-nav").css("background-color","white");
		$(".top-nav").css("padding","5px");
		 $(".top-nav a").css("color","black");		
	}

	wPosition = w3Scroll;
}

/*
function showCard( currentCard = 2 )
{	
	var slider_card = document.getElementsByClassName("slider-card");
	var imageWidth = slider_card[0].children[0].offsetWidth;
	switch( currentCard )
	{
		case 1:
			$(".test").css("margin-left","0px");
			break;
		case 2:
		    //$(".test").css("margin-left",-screen.width/50% - screen.width +"px");			
			$(".test").css("margin-left",-20+"em");			
			break;
		case 3:						
			$(".test").css("margin-left",-60+"em");
			break;
	}
}
*/

$(document).ready(function()
{	
	$("#icon").click(function(){
		$(".overlay").show();
		$(".side-bar").animate({
			"marginLeft":"-0px"
		},1000);
		$(".top-nav").hide();
		console.log("marginLeft:0px")
	});
	$("#icon2").click(function(){
		$(".overlay").hide();		
		$(".side-bar").animate({
			"marginLeft":"-600px",
		});
		$(".top-nav").show();
		console.log("marginLeft:-500px")
	});	
});

$('.loader').hide();

$(window).load(function() {
   $('.loader').show();
   $('.loader').fadeOut('slow');
});