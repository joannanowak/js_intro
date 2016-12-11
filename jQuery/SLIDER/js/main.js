//funkcja dokument.ready() - wersja skrocona
$(function(){
	
	var slideCount = $('.single-slide').length; //liczy dl tablicy single-slide
	var slideWidth = 100/slideCount; //szerokosc lajdu w %
	var slideShow = $('.slide-show');
	
//	console.log(slideCount);
	
	slideShow.css('width', slideCount * 100 + "%"); //dodaje dł 100% do single-slide 
	
	slideShow.find('.single-slide').each(function(i){ //znajduje single-slide i każdemu
		$(this).css('width', 100 / slideCount + '%'); //przypisuje szerokosc proporcjonalnie do ilosci slajdow
		
		var leftSlide = slideWidth * i  //szer każdego slajdu 
		$(this).css('left',leftSlide + '%'); //nadaj każdemu slajdowi położenie left 0%, 20% ... itd
	});
	
	
});