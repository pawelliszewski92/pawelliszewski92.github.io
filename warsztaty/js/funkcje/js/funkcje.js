// funkcja bez parametrow
function wyswietlWKonsoli() {
    console.log("Jan Nowak");
}

wyswietlWKonsoli();

//funkcja z paremetrami
function wyswietlWKonsoliParam (imie, nazwisko) {
    console.log(imie + " " + nazwisko);
}

wyswietlWKonsoliParam("Jan", "Nowak");
wyswietlWKonsoliParam("Anna", "Nowak");
wyswietlWKonsoliParam("Wacław", "Wacowski");


//podatek
function obliczPodatek( kwota, procentPodatek) {
    var wynik = kwota * (procentPodatek / 100);
    return wynik.toFixed(2);
}
//var obliczenia1 = obliczPodatek( 4990, 23 );
//console.log ("Wysokość obliczonego podatku wynosi: " + obliczenia1);


function wyswietlWynik (wartosc) {
    document.write(wartosc);
}

var obliczenia = obliczPodatek(1000,10);
wyswietlWynik(obliczenia);
