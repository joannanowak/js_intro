"use strict";

function inputClick(value) {
	var widok = document.getElementById("view").value;
	if (value != "AC" && value != "=" && value != ".") { //spr czy rozne od AC i ==. Nie uwzględnia kropki
		document.getElementById("view").value += value; //w polu dodaje kolejne liczby i znaki działania
	} else if (value == "AC") { //jeśli AC to wyczyść pole wprowadzania
		document.getElementById("view").value = " ";
	} else if (value == ".") {
		if (widok.slice(-1) != ".") { //spr czy ostatni element jest rozny od kropki
			document.getElementById("view").value += value;
		}
	} else { //jeśli klikamy przycisk
		if (isNaN(widok.slice(-1)) || widok.indexOf('/0')>-1) { //kiedy jest liczba lub kiedy w ciągu znakow widok, jest /0
			document.getElementById("view").value = "Error!"; // zwraca error do pola
		} else {
			document.getElementById("view").value = eval(widok);//wylicza wynik i wyświetla w polu
		}

	}

}