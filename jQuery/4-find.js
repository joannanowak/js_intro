//funkcja dokument.ready() - wersja skrocona
$(function(){
	
//	alert("halo")
	
	$('body').find('p').css('color', 'green'); //znajduje wszystkie p w body i nadaje im kolor green
	
	$('p').each(function(){
		console.log(this);
	});
	
	$('p').each(function(index){
		console.log(index);
	});
	
	$('p').each(function(index){
		$(this).addClass('paragraf-'+index);//dodaje klasę z kolejnym indeksem do elementow p 
	});
	
});