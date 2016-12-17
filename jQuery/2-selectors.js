//funkcja dokument.ready() - wersja skrocona
"use strict";
$(function(){
	
//	alert("halo")
	
	var paragraphs = $('p');
	console.log(paragraphs);
	
	var paragraph1 = $('#paragraf1');
	console.log(paragraph1);
	
	var paragraf2 = $('.paragraf1');
	console.log(paragraf2);
	
	$( "button" ).click( function() { 
		$( "p.dupa" ).each( function() {
			console.log( $( this ).text() ); } );
} );
	
	
	$( "p.dupa" ).html( "Hello <b>world</b>!" );
	
	console.log( $( "p>.dupa" ) );
	
	console.log($(„p”).css(„color”));
});