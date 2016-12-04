"use strict";
var mainHeader = document.getElementById("main_header");
mainHeader.innerHTML = "Treść nagłowka";

var link2 = document.getElementsByTagName('a')[1];

link2.onclick = alarm;

var link3 = document.getElementsByTagName('a')[2];
link3.addEventListener("click", alarm);

function alarm(){
	alert("Kliknięto kolejny link");
}
//function alarm(){
//	e.preventDefault();
//}

//zmiana wielkości nagłowka
var mainHeader = document.getElementById("main_header");
mainHeader.onmouseover = resize;
mainHeader.onmouseout = resize;


function resize(e){
	if(e.type =="mouseover"){
		mainHeader.style.color ="red";
	} else {
		mainHeader.style.color ="inherit";
	}
}



document.getElementsByTagName("header")[0].onclick= ckickHeader;

function ckickHeader(){
	alert("Klik w header")
}
	
document.getElementsByTagName("h1")[0].onclick = clickH1;

function clickH1(e){
	e.stopPropagation();
	alert("Klik w H1");
}

