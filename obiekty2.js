"use strict";

var tablica = [2, 3, 4, 5, 6, 7, 8];

function suma() {
	var licz = 0;
	for (var i = 0; i < tablica.length; ++i) {

		licz += tablica[i];
	}
	return licz;
}


console.log(suma());