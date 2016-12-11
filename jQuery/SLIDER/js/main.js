//funkcja dokument.ready() - wersja skrocona
$(function () {

	var slideCount = $('.single-slide').length; //liczy dl tablicy single-slide
	var slideWidth = 100 / slideCount; //szerokosc lajdu w %
	var slideShow = $('.slide-show');
	var leftArrow = $('.prev-slide');
	var rightArrow = $('.next-slide');
	var slideIndex = 0;


	//	console.log(slideCount);

	slideShow.css('width', slideCount * 100 + "%"); //dodaje dł 100% do single-slide 

	slideShow.find('.single-slide').each(function (i) { //znajduje single-slide i każdemu
		$(this).css('width', 100 / slideCount + '%'); //przypisuje szerokosc proporcjonalnie do ilosci slajdow

		var leftSlide = slideWidth * i //szer każdego slajdu 
		$(this).css('left', leftSlide + '%'); //nadaj każdemu slajdowi położenie left 0%, 20% ... itd
	});

	leftArrow.click(function () { //left arrow wywoła funkcje slide
		slide(slideIndex - 1); //jako parametr przekazujemy kolejny nr slajdu

	});

	rightArrow.click(function () { //right arrow wywoła funkcje slide
		slide(slideIndex + 1); //jako parametr przekazujemy kolejny nr slajdu

	});

	function slide(newSlideIndex) { //funkcja wywolana w momencie klikniecia, jej parametrem jest nowy index slajdu
		console.log(newSlideIndex);

		if (newSlideIndex < 0 || newSlideIndex >= slideCount) { //jeśli napotkamy pierwszy lub ostatni slajd
			return;
		}

		var napis = $('.slider-caption'); // zmienna dla napisu
		

		var napisPoprzedzajacy = napis.eq(newSlideIndex);
		napisPoprzedzajacy.hide();

		var marginLeft = (newSlideIndex * (-100)) + "%"; //wartoś marginesu z lewej strony 

		slideShow.animate({
			'margin-left': marginLeft
		}, 1000, function () { //zanimuj margines, zeby sie przesuwal o 100% i wywołaj funkcję, ktora przyppisze nowy index slajdowi
			slideIndex = newSlideIndex;
			napisPoprzedzajacy.fadeIn(500);
		});



	}
});