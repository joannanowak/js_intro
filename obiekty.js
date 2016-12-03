'use strict';

function Osoba(imie, nazwisko) {
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.wzrost;
	this.oczy;
	this.getInfo = function () {
		console.log("Imię: " + this.imie + "\n" 
					+ "Nazwisko: " + this.nazwisko + "\n" 
					+ "Wzrost: " + this.wzrost + "\n" 
					+ "Nazwisko: " + this.nazwisko 
					+ "\n" + "Oczy: " + this.oczy)
	}

}

var krystian = new Osoba ("Krystian", "Dziopa");
krystian.wzrost = 180;
krystian.oczy = "niebieskie";

krystian.getInfo();

var kasia = new Osoba ("Kasia", "Zając")

kasia.getInfo();


//
//var Osoba = {
//	imie: "Marcin",
//	wzrost: 180,
//	wyswietlDetale: function () {
//		console.log(this.imie + " " + this.wzrost);
//	}
//}
//Osoba.imie = "Kasia";
//Osoba.wzrost = 170;
//
//Osoba.wyswietlDetale();
//
//var ja = {
//	imie: "Asia",
//	wzrost: 171,
//	wyswietlDetaleJa: function () {
//		console.log(this.imie + " " + this.wzrost);
//	}
//}
//
//ja.oczy = "niebieskie";
//ja.wyswietlDetaleJa();
//console.log(ja.oczy);
//console.log(ja);
//
//delete ja.imię;
//ja.wyswietlDetaleJa();