$(window).scroll(function(){
	parallax();
})

function parallax()
{
	var w3Scroll = $(window).scrollTop();

	if( w3Scroll > 0 )
	{
		$(".parallax").css("background-position","center " + ( w3Scroll * 0.05 )+"px");
	}
}