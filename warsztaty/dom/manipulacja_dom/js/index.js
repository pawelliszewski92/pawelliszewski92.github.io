//innerHTML
var parFirst = document.getElementById("parFirst");
//console.log(parFirst.innerHTML);
//console.log(parFirst.outerHTML);

//innerHTML - przypisanie wartości
var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "<span>Nowa zawartośc h1</span>";

//zmiana styli
mainHeader.style.color = "red";

//przypisanie klasy - ustawia na nowo caly atrybut class - napisuje wczesniejsz wartosci
mainHeader.className = "big";


//dodanie nowej klasy elemenu
mainHeader.classList.add("nowa_klasa");


//usuwanie klasy
mainHeader.classList.remove("big");


//pobdeanie klas elementu
console.log(mainHeader.className);

//zmiana background color
mainHeader.style.backgroundColor = "black"