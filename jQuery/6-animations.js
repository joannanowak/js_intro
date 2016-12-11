//funkcja dokument.ready() - wersja skrocona
$(function(){
	
//	alert("halo")
	
	$('p').hide(3000).show(3000);
	
	$('p').hide(3000).show(3000, alarm);
	
	function alarm(){
		alert('koniec animacji');
	}
	
	$('h1').fadeOut(3000).fadeIn(3000);
		
	
	$('h2').slideUp(3000).slideDown(3000);	
	
	$('h3').animate({'font-size':'3em', 'margin-left':'100px'}, 2000, animacja);
	
	function animacja(){
		$('h3').animate({'font-size':'1em', 'margin-left':'0px'}, 2000);
	}
	
	
});