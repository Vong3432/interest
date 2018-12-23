
// carousel function
var slides = document.getElementsByClassName('slide');
var currentSlide = 0;

for( var i = 0 ; i < slides.length ; i++)
{
	slides[i].style.display = "none";
}

slides[currentSlide].style.display = "block";

function changeSlide(action)
{	
	
	if( action == '+' )
	{				
		slides[currentSlide].style.display = "none";
		currentSlide++;
		if( currentSlide > slides.length-1 )
		{
			currentSlide = 0;
		}
		slides[currentSlide].style.display = "block";
		console.log(currentSlide);
	}

	else if ( action == '-') 
	{	    
		slides[currentSlide].style.display = "none";
		currentSlide--;
		if( currentSlide < 0 )	
		{
			currentSlide = slides.length-1;
		}
		slides[currentSlide].style.display = "block";		
		console.log(currentSlide);
	}

}