"use strict";
//
//var istniejacyWezel = document.getElementById("parFirst").children[2];
//console.log(istniejacyWezel);
//
//var nowyElement = document.createElement("p");
//var nowyElementContent = document.createTextNode("To jest Nowy paragraf");
//
//nowyElement.appendChild(nowyElementContent);
//
//document.getElementById("parFirst").replaceChild(nowyElement, istniejacyWezel);

var pobierzLinki = document.getElementsByClassName("link");
console.log(pobierzLinki);

for (var i = 0; i < pobierzLinki.length; i++){
	var nowyBr = document.createElement("br");
	pobierzLinki[i].parentNode.insertBefore(nowyBr, pobierzLinki[i].nextSibling);
}

//przed istniejącym rodzeństwem danego linka dodaje br 



