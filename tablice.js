
var kolory = ['pomaranczowy', 'zolty', 'bialy'];
kolory[3]='czerwony';

kolory.push('czarny');

kolory.pop();



var dlTablicy;
var uniwersalnaZmienna;
dlTablicy = kolory.unshift("zielony");

kolory.shift();
//
//console.log(kolory.length);
//console.log(kolory);
//console.log(dlTablicy);

for (var i=0; i<kolory.length; ++i){
	console.log(i);
	console.log(kolory[i]);
}

kolory.forEach (function(element, iteration){
				console.log("Kolor nr "+ iteration + " to "+element)
				});

var zlaczony= kolory.join(" ");
console.log(zlaczony);



//dlTablicy = kolory.reverse();
console.log(kolory.reverse());

uniwersalnaZmienna = kolory.sort();
console.log(uniwersalnaZmienna);

