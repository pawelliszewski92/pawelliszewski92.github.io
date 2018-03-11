//typ liczbowy - mozna wykonywac dzialania arytmetycznme
var wyplata = 4500;
var premia = 850;
var suma = wyplata + premia;
console.log( suma);
console.log(typeof wyplata);

// typ łańcuchowy - string (znak plus łączy lancuchy tekstu)
var strWyplata = "4500";
var strPremia = "850";
var tekst = "\"Tak dodaje się cudzysłów\" \n a tak nową linię a tak lewy ukosnik \\"
var strSuma = "wypłata to: " + strWyplata + " + " + strPremia + " " + tekst;
console.log(strSuma);
console.log(typeof strSuma);

// typ boolean (logiczny) przyjmuje jedna z 2 wartosci true albo false
var czyJestWiosna = false;
if( czyJestWiosna) {
    console.log("Tak, jest już wiosna");
} else {
    console.log("Nie ma wiosny, pizdzi");
}
console.log(typeof czyJestWiosna);


// typy specjalne - undentifined i null
var zmiennaTylkoZadeklarowana;
console.log(zmiennaTylkoZadeklarowana);

var zmiennaNull = null;
console.log(zmiennaNull);