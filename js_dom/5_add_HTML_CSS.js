"use strict";
var mainHeader = document.getElementById("main_header");
mainHeader.innerHTML = "Treść nagłowka";

var link = document.getElementById("parFirst").children[1];
console.log(link);

link.href="google.com";
link.className="Nowa Klasa";

mainHeader.style.color="red";