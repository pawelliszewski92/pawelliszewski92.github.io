//operatory arytmetyczne
var liczba1 = 10;
var liczba2 = 5;

//dodawanie
var wynik = liczba1 + liczba2;
console.log(wynik);

//odejmowanie
wynik = liczba1 - liczba2;
console.log(wynik);

//mnożenie
wynik = liczba1 * liczba2;
console.log(wynik);

//dzielenie
wynik = liczba1 / liczba2;
console.log(wynik);

//modulo
wynik = liczba1 % liczba2;
console.log(wynik);

//inkrementacja
liczba2++;
console.log(liczba2);

//dekrementacja
liczba2--;
console.log(liczba2);


var liczba3 = 200;
var liczba4 = 100;

//dodanie wartosci do zmiennej
liczba3 += 200;
console.log(liczba3);

//odejmowanie wartosci od zmiennej
liczba4 -=50;
console.log(liczba4);

//mnozenie/dzielenie wartosci zmiennej przez jakąś liczbe
liczba2 *= 20;
console.log(liczba2);

liczba3 /= 20;
console.log(liczba3);

//modulo (reszta z dzielenia) przypisana do wartosci liczby

var liczba5 = 100;
liczba5 %= 3;
console.log(liczba5);


//OPERATORY POROWNANIA  
 var liczba6 = "10";
var liczba7 = 10;

if( liczba6 !== liczba7) {
    console.log("Warunek spelniony - True");
} else {
    console.log("Warunek nie spelniony - False");
}


//operatory logiczne


var liczba8 = 20;
var liczba9 = 4;
var czyWiosna = "tak";

if (liczba8 < liczba9 || czyWiosna == "tak") {
    console.log("Warunek spelniony");
} else {
    console.log("warunek nie zostal spelniony")
}





























