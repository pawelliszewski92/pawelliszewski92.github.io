var imiona = ['Adam', 'Marta', 'Paweł', 'Michał', 'Kasia', 'Sandra'];

console.log(imiona);

console.log(imiona[0], imiona[3]);

//wstawienie nowego indeksu z wartoscia do tablicy imiona
imiona[6] = "Mikołaj";
imiona[7] = "Kinga";
console.log(imiona);

//push - wstawia na ostatnie miejsce tablicy nowa wartosc (metody wywylujemy za pomoca kropki)
imiona.push("Kamil");
console.log(imiona);

imiona.push("Ola", "Krzysiek", "Ania");
console.log(imiona);

//metoda pop usuwa ostatni element tablicy i zwraca usuniety element
imiona.pop();
console.log(imiona);

//metoda unshift dodaje elementy na początku
imiona.unshift("Arek","Agnieszka");
console.log(imiona);

//metoda shift usuwa pierwszy element tablicy i zwraca usuniety element
var usunietyElement = imiona.shift();
console.log(imiona);
console.log(usunietyElement);

//wlasciwosc tablicy - poznawanie ilosci elementow tablicy
var iloscElementowTablicy = imiona.length;
console.log(iloscElementowTablicy);

//wypisywanie zawartosci tablicy na piechote
var textZTablicy = imiona[0] + ", " + imiona[1];
//etc
console.log(textZTablicy);

//wypisywanie zawartosci tablict za pomoca metody join
var elementyTablicyString = imiona.join();
console.log(elementyTablicyString);

var elementyTablicyStringParametr = imiona.join(", ");
console.log(elementyTablicyStringParametr);


//odwrocenie tablicy
imiona.reverse();
console.log(imiona);

//sortowanie tablicy
imiona.sort();
console.log(imiona);

//sprawdzenie czy dany element tablicy istnieje
console.log(imiona.indexOf("Ola"));
console.log(imiona.indexOf("Czesław"));

















