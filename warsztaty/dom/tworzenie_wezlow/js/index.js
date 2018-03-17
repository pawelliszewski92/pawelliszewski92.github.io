var istniejacyWezel = document.getElementById("output");
//console.log(istniejacyWezel);


//tworze nowy element html
var newElement = document.createElement("p");

//tworzenie tresci do stworzonego paragrafu
var newElementContent = document.createTextNode("Nowy tekst paragrafu");

//wstawienie stworzonej stresci do newElement
newElement.appendChild(newElementContent);

//wstawienie newElement  do istniejacego elementu
istniejacyWezel.appendChild(newElement);


//dodanie atrybutu
newElement.setAttribute('class', 'textpar');

//usuwanie dzieci
//pobieramy rodzica i potem z jego perspektywy usuwamy dziecko
istniejacyWezel.parentElement.removeChild(istniejacyWezel);
//odwolujac sie bezposrednio do rodzica
//document.getElementById("parFirst").removeChild(istniejacyWezel);

//insertBefore - wstawienie przed wskazanym elementem
var link = document.getElementsByClassName('super_link')[0];
var br = document.createElement("br");
link.parentElement.insertBefore( br, link);

//usuwanie atrybutu
link.removeAttribute("class");



