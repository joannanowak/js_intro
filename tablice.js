var liczba1 = 50;
var kolory = ['pomaranczowy', 'zolty', 'bialy'];
kolory[3] = 'czerwony';

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

for (var i = 0; i < kolory.length; ++i) {
	console.log(i);
	console.log(kolory[i]);
}

kolory.forEach(function (element, iteration) {
	console.log("Kolor nr " + iteration + " to " + element)
});

var zlaczony = kolory.join(" ");
console.log(zlaczony);



//dlTablicy = kolory.reverse();
console.log(kolory.reverse());

uniwersalnaZmienna = kolory.sort();
console.log(uniwersalnaZmienna);


//nowa tablica
var kolory2 = ['niebieski', 'rozowy', 'lazurowy', 'biały'];

console.log(kolory.concat(kolory2));

console.log(kolory2.indexOf("niebieski"));

if (Array.isArray(liczba1)) {
	console.log("jest");
} else {
	console.log("nie jest");
};

Array.isArray(kolory2) ? console.log("jest") : console.log("nie jest");

//slice
//console.log(kolory.slice(0,2));

//splice
console.log(kolory);

console.log(kolory.splice(1, 0, "srebrny", "czarny"));


console.log(kolory.toString());