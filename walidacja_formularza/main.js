"use strict";

//document.getElementById("wyslij").addEventListener("click", validateForm);


var zgoda_1 = document.getElementById('zgoda-marketingowa-1');
var zgoda_2 = document.getElementById('zgoda-marketingowa-2');
var zgoda_all = document.getElementById('wszystkie-zgody');
zgoda_1.addEventListener("click", validateCheckbox);
zgoda_2.addEventListener("click", validateCheckbox);
zgoda_all.addEventListener("click", validateCheckbox);


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