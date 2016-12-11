//funkcja dokument.ready() - wersja skrocona
$(function(){
	
//	alert("halo")
	
	var textPar1 = $('#paragraf1').text();
	console.log(textPar1);
	
	$(".paragraf1").text(textPar1);
	
	$(".paragrafnext").html("To jest <strong>Nowy Paragraf</strong> z <br> odstepem.  ");
	
	$(".paragrafnext").append("Dodaje tresc na koncu selektora");
	$(".paragrafnext").after("Dodaje tresc za selektorem");
	
	$("strong").remove(); //usuwa tresc ze strongiem
	
//	$('#paragraf1').empty();
	
//	$(".paragrafnext").css("font-size", "3em");
//	
	
	$(".paragrafnext").css({'font-size': '3em', 'color':'red'});
	
	$('h1').addClass('blue');
});