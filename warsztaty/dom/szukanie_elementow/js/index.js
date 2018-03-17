//pobranie elementow po id - tylko jeden dokument (nie trzeba dodawac "#" bo funkcja juz wie ze szukamy id)
var parFirst = document.getElementById("parFirst");
//console.log(parFirst);


//pobieranie elementow po klasie - kolekcja elemntow
//get elementSSSS, nie trzeba dodawac kropki bo wie ze szukamy klasy, wyglada jak tablica, ale jest to html collection - troche inna struktura danych
var elementLink = document.getElementsByClassName("link");
//console.log(elementLink);





//pobieranie elementow po tagu (chodzi o p, div, section etc - to sa tagi)
var elementTagP = document.getElementsByTagName("p");
//console.log(elementTagP);


//query selector all - pobiera wszystkie, zwraca wiele elementow
//quest selector - pobiera tylko jeden element, (jesli jest wiecej to pierwszy z wielu)
//do quest selector i quesy selector all trzeba wyszukac dodajac znaki id i class (# i .) zeby metoda wiedziala co wyszukac


//pobieranie elementow o klasie supelink (selektor .superlink)
var elementSuperLinks = document.querySelectorAll(".super_link");
//console.log(elementSuperLinks);

//pobiera tylko pierwszy element
var elementSuperLink = document.querySelector(".super_link");
//console.log(elementSuperLink);


//pobieranie pojedynczego po id

var elementParSecond = document.querySelector("#parSecond");
//console.log(elementParSecond);



var mojeLinki = document.querySelectorAll(".link");

//odwolywanie sie tylko do jednego z elementow html collection
//console.log(mojeLinki[2]);

//petla forEach dziala na kolekcji pobranej za pomoca meody
mojeLinki.forEach(function(element, index) {
    console.log(element);
});


var mojeLinki = document.getElementsByClassName("link");
for(i=0;i<mojeLinki.length;i++) {
    console.log("to mój link nr " + (i + 1));
    console.log(mojeLinki[i]);
    console.log("----------------");
}




