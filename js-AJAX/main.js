'use strict';

function ajax(options){
	
	options = {
		type: options.type || 'POST',
		url: options.url || '',
		onComplete: options.onComplete || function(){},
		onError: options.onError || function(){},
		onSuccess: options.onSuccess || function(){},
		dataType: options.dataType || 'text'
	};
	
	console.log(options);
	
	function httpSuccess(httpRequest){
		try {
			return (httpRequest.status >= 200 && httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpRequest.status == 'undefined');
					
		}catch (e){
			return false;
		}
	}
	
	var xml = new XMLHttpRequest();
	xml.open(options.type, options.url, true);
	
	
	
	/*stany dokumentow
	0 - polaczenie nie jest nawiazane
	1 - polaczenie nawiazane
	2 - zadanie odebrane
	3 - przetwazanie
	4 - dane zwrocone i gotowe do uzycia
	*/
	xml.onreadystatechange = function(){
		if (xml.readyState == 4){  //doc. został w pelni zaladowany
			
			if ( httpSuccess (xml)) {
				
				options.onSuccess(xml.responseText);
				xml = null;
		
		}else{
				options.onError ( xml.statusText );
			 }
			
			
		}
	
	}
	xml.send();
	
}


function pobierzDane(event){
	event.preventDefault;
	
	ajax ( {
		
		type: 'GET',
		url: 'http://echo.jsontest.com/imie/asia/oczy/niebieskie/zycie/krolewskie',
		onError: function (msg) {
			console.log(msg);
		},
		onSuccess: function(response){
			console.log(response);
		}
		
	} );
}


//
//function pobierzDane(event){
//	event.preventDefault();
//	
//	var xml = new XMLHttpRequest();
//	
//	xml.open('GET', 'http://echo.jsontest.com/imie/asia/oczy/niebieskie/zycie/krolewskie', true) //'otwieramy drzwi'
//	
//	xml.onreadystatechange = function(){
////		if (xml.readyState == 4){  //doc. został w pelni zaladowany
//			
//		if ( xml.readyState == 4 && (xml.status >= 200 && xml.status < 300 || xml.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof xml.status == 'undefined')) {
//				
//				alert(xml.responseText);
//				xml = null;
//			}
//			
//			
//		}
//	xml.send(); //'wchodzimy'	
//}
//	
//	
