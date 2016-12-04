"use strict";

var paragraphParent = document.getElementsByTagName("p")[1].parentNode;
console.log(paragraphParent);

var secondChild = document.getElementById("parFirst").children[1];
console.log(secondChild);

var sibling = document.getElementById("parFirst").children[0].nextElementSibling;
console.log(sibling);
