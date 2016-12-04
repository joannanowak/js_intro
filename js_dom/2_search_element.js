"use strict";

var div = document.getElementById("parSecond");
console.log(div);


var linki = document.getElementsByTagName("a");
console.log(linki);

var linkiPoKlasie= document.getElementsByClassName("link");
console.log(linkiPoKlasie);

var drugiLink =linkiPoKlasie[1];
console.log(drugiLink);

for (var i =0; i < linkiPoKlasie.length; ++i){
	console.log(linkiPoKlasie[i] + " to jest link " + (i+1));
}