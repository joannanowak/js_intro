"use strict";

function liczOdsetki(){

	var wplata = parseInt(document.getElementById("wplata_k0").value);//pobiera wartość inputu Wpłata (PLN)
	
	var kpt_m = parseInt(document.getElementById("kapitalizacja_czestotliwosc").value); //pobiera wartość częst. kapit.
	var kpt_r = parseInt(document.getElementById("stopa_zwrotu").value)/100; // pobiera stopę zwrotu
	var kpt_n = parseInt(document.getElementById("liczba_lat_kapitalizacji").value);
	
	var ulamek = kpt_r / kpt_m;
	var potega = kpt_n - kpt_m;
	var odsetki = wplata * Math.pow(1+ulamek,potega);

	console.log("wplata: " + wplata);
	console.log("czestotliwosc kapitalizacji: " + kpt_m);
	console.log("liczba lat: " + kpt_n);
	console.log("stopa zwrotu: " + kpt_r);
	console.log("Jeśli dzisiaj włożysz: "+ wplata + ", to za " + kpt_n + " lat wyciągniesz " + odsetki);
	
}


