class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    
    opiszKsiazke() {
        if(this.przeczytana === true) {
           console.log("Książka ma tytuł " + this.tytul + ", jej autorem jest " + this.autor + " i została przeczytana.");
 
        } else {
            console.log("Książka ma tytuł " + this.tytul + ", jej autorem jest " + this.autor + " i nie została przeczytana.");
        }
    }
}

var ksiazka1 = new Ksiazka("Wiedzmin", "Andrzej Sapkowski", true);

var ksiazka2 = new Ksiazka("Władca Pierścieni", "J.R.R. Tolkien", false);

var ksiazka3 = new Ksiazka("Gra o Tron", "G.R.R. Martin", false);


var ksiazki = [ksiazka1, ksiazka2, ksiazka3];


function iloscPrzeczytanych(array) {
	var sum = 0;
    for(i=0;i<array.length;i++) {
        array[i].opiszKsiazke();   
        if(array[i].przeczytana === true) {
            sum++
           
        }
         
    }
    console.log("Ilość przeczytanych książek to: " + sum);
    return sum;
    
}

iloscPrzeczytanych(ksiazki);
