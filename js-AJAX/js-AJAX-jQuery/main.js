'use strict';

$(function () {

	$("#link").click(function () {
//		
		console.log('ok');
		$.getJSON("http://echo.jsontest.com/imie/asia/oczy/niebieskie/zycie/krolewskie", function (result) {
//			
//			$(selector).getJSON(url,data,success(data,status,xhr))

			console.log(result);
			
//			$.each(result, function (i, field) {
//				$("div").append(field + " ");
//			});
			
			console.log('okok');
		});
	});


});