var zmiennaGlobalna = "Zmienna globalna - cały świat, widoczna w innych funkcjach";

function wyswietlZmienna( zmienna ) {
    console.log(zmienna);
}

wyswietlZmienna(zmiennaGlobalna);

function wyswietlZmiennaLokal() {
    var zmiennaLokalna = "Zmienna lokalna, zamknieta w funkcji i niedostepna dla calego swiata";
}

//wyswietlZmienna(zmiennaLokalna);

var zmienna = "zmienna globalna"

function pokazZmienna() {
    var zmienna = "zmienna lokalna"
    console.log(zmienna);
}
pokazZmienna();

console.log (zmienna);