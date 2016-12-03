function mnozenie(liczba1, liczba2) {

	console.log(liczba1 * liczba2);
}

mnozenie(3,4);
mnozenie(7,8);


//function mnozenie(liczba1, liczba2) {
//	var wynik = liczba1* liczba2;
//	document.write("Wynik to " + wynik +". " );
//}
//
//mnozenie(6,8);



function mnozenie(liczba1, liczba2) {
	var wynik = liczba1 * liczba2;
	return wynik;
}
var pokazWynik = mnozenie (4,3);
document.write("Wynik to " + pokazWynik +". " );
