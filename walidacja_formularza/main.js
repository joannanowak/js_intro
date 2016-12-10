"use strict";

//document.getElementById("wyslij").addEventListener("click", validateForm);


var zgoda_1 = document.getElementById('zgoda-marketingowa-1');
var zgoda_2 = document.getElementById('zgoda-marketingowa-2');
var zgoda_all = document.getElementById('wszystkie-zgody');

zgoda_all.addEventListener("change", validateCheckbox);

var input_name = document.getElementById("name");
var input_email = document.getElementById("email");
input_name.addEventListener("change", validateInput);
input_email.addEventListener("change", validateInput);

var button = document.getElementById("wyslij");
button.addEventListener("click", validateInput);

var nowyParagraf = document.createElement("p");
var nowyParagrafContent = document.createTextNode("Podaj email!");

var elementy = document.getElementsByTagName("input")[0];
console.log(elementy);

function validateInput(){
//	var inputs = input_email, input_name;
	if (input_name.value =="" || input_name.value ==null){
		console.log("pole puste");
		
//nowyParagraf.parentNode.insertBefore(nowyParagraf, .nextSibling);
		
//		alert("Wypelnij pole imie");
		
//     	document.createTextNode("Proszę wprowadzić poprawne dane.");
		
	}else if (input_email.value == "" || input_email.value == null){
		alert("Wypelnij pole mail");
	}else{
		alert("not empty")
	}
}


function validateCheckbox() {
	if (zgoda_all.checked) {
		zgoda_1.checked = true;
		zgoda_2.checked = true;
		zgoda_1.disabled = true;
		zgoda_2.disabled = true;
	} else{
		zgoda_1.checked = false;
		zgoda_2.checked = false;
		zgoda_1.disabled = false;
		zgoda_2.disabled = false;
}

}