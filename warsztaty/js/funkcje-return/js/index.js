function sumaWypłat(selector) {
  var elementy = document.querySelectorAll(selector);
//optymalizacja petli poprzez stworzenie jednej wartosci ktora nie bedzie obliczana rzy kazdej iteracji funkcji
  var elementyLength = elementy.length;
//startowa suma
  var sum = 0;
  for(var i=0;i<elementyLength; i++) {
      var val = elementy[i].innerHTML;
      sum += parseInt(val);
  }
    return sum;
};



function wyswietlWynik(wynik) {
    var div = document.createElement("div");
    var txt = document.createTextNode(wynik);
    div.appendChild(txt);
    document.body.appendChild(div);
    
}

var wynikObliczen = sumaWypłat('p');
wyswietlWynik(wynikObliczen);