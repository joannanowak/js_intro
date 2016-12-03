"use strict";

function Telefon(marka, model) {
	this.marka = marka;
	this.model = model;
	this.kolor;
	this.nr_seryjny;
	this.getInfo = function () {
		console.log("Marka " + this.marka + "\n" 
					+ "Model: " + this.model + "\n" 
					+ "Kolor: " + this.kolor + "\n" 
					+ "nr_seryjny: " + this.nr_seryjny 
					)
	}

}

var iphone = new Telefon ("iPhone", "5SE");
iphone.kolor = "Silver";
iphone.nr_seryjny = "#1234567890";

iphone.getInfo();

var xiaomi = new Telefon ("Xiaomi", "Red Mi Note 3")
xiaomi.kolor = "Black";
xiaomi.nr_seryjny = "#0987654321";

xiaomi.getInfo();


