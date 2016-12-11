"use strict";


//sprawdzenie statusu checkboxow
document.getElementById('wszystkie-zgody').addEventListener("change", checkingStatus); //dodanie listenera do ostatniego checkboxa 


function checkingStatus() {

	var allAgreements = document.getElementById('wszystkie-zgody');
	console.log(allAgreements);
	var status = (allAgreements.checked == true) ? true : false;
	console.log(status); //spr. czy ostatni checkbox ma status checked, jesli ma, przypisz true, jesli nie ma przyszpisz false

	var allCheckboxes = document.querySelectorAll('input[type=checkbox]'); //przypisz zmiennej allCheckboxes wszystkie elementy checkbox

	for (var i = 0; i < allCheckboxes.length - 1; ++i) {
		allCheckboxes[i].disabled = status; //dla checkboxow disabled przypisz status
		allCheckboxes[i].checked = status; //dla checkboxow checked przypisz status
	}
}


//dodanie listenera do buttona
var button = document.getElementById("wyslij");
button.addEventListener("click", validateInput);

function validateInput(event) {


	var nowyParagrafContent = document.createTextNode("To pole jest wymagane"); //stworz kontent do nowego elementu

	var allFields = document.querySelectorAll('input[type=text]');
	console.log(allFields); //przypisz zmiennej wszystkie elementy typu tekst
	
	var zgoda1 = document.getElementById("zgoda-marketingowa-1");

	for (var i = 0; i < allFields.length; i++) {
		if (allFields[i].value == "") {
			event.preventDefault(); //powstrzymuje domyślną akcję
			
			var nowyParagraf = document.createElement("p"); //stworz nowy element p
			nowyParagraf.innerHTML = "To pole jest wymagane";//przypisz mu treść
			
			allFields[i].parentNode.replaceChild(nowyParagraf, allFields[i].nextSibling); //wstaw paragraf
			
			
//			for (var i=0; i< nowyParagraf.length; i++){
//				p_elements[i].id='alert';
//			}
					

		} else if (zgoda1.nextElementSibling.tagName="p"){
			zgoda1.nextElementSibling.remove();
		}
	}
}





//var inputy = document.getElementsByTagName("input")[0];
//console.log(elementy);

//function validateInput(){
////	var inputs = input_email, input_name;
//	if (input_name.value =="" || input_name.value ==null){
//		console.log("pole puste");
//		
////nowyParagraf.parentNode.insertBefore(nowyParagraf, .nextSibling);
//		
////		alert("Wypelnij pole imie");
//		
////     	document.createTextNode("Proszę wprowadzić poprawne dane.");
//	





//function validateCheckbox() {
//	if (zgoda_all.checked) {
//		zgoda_1.checked = true;
//		zgoda_2.checked = true;
//		zgoda_1.disabled = true;
//		zgoda_2.disabled = true;
//	} else{
//		zgoda_1.checked = false;
//		zgoda_2.checked = false;
//		zgoda_1.disabled = false;
//		zgoda_2.disabled = false;
//}
//
//}