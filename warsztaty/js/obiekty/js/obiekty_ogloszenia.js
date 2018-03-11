class Ogloszenia {
    constructor(tytul, tresc, cena, kategoria) {
        this.tytul = tytul;
        this.tresc = tresc;
        this.cena = cena;
        this.kategoria = kategoria;
    }
    
    wyswietl() {
        var ogloszenie = "Tytuł ogłoszenia: " + this.tytul + "\nTreść ogłoszenia: " + this.tresc + "\nCena ogłoszenia:" + this.cena + "\nKategoria ogłoszenia: " + this.kategoria;
        
        return ogloszenie;        
    }
}

var ogloszenie1 = new Ogloszenia("Sprzedam Opla", "Niemiec płakał jak sprzedawał", 500, "motoryzacja");

console.log(ogloszenie1);

var ogloszenieDoWyswietlenia = ogloszenie1.wyswietl();
console.log(ogloszenieDoWyswietlenia);