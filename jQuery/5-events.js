//funkcja dokument.ready() - wersja skrocona
$(function(){
	
	$('h1').click(function(){
		$(this).css('color', 'yellow')
	}
	);
	
	$('h1').on({
		'click':function(){
			$(this).css('color', 'orange');
		},
		'mouseleave':function(){
			$(this).css('color','green');
		}
	}
	)
	
});