 function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
     if(podatek == true) {
         var oprocentowanieOpodatkowane = oprocentowanie - (0.19 * oprocentowanie);
     } else {
         var oprocentowanieOpodatkowane = oprocentowanie;
     }
     
     //oprocentowanieOpodatkowane = podatek ? oprocentowanie * 0.81 : oprocentowanie   ---- skrocony zapis tego co powyzej ? - jeśli prawda to... : - else
     
     var kapital = wplata * Math.pow((1 + (oprocentowanieOpodatkowane / okresKapitalizacji)),(iloscLat * okresKapitalizacji));
     
     return kapital.toFixed(2);
     
};


function obliczPodatek(e) {
    e.preventDefault();
    
    var button = document.getElementById("oblicz");

    var wplata = parseInt(document.getElementById("wplata").value);

    var iloscLat = parseInt(document.getElementById("ilosc-lat").value);

    var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);

    var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value) / 100;

    var podatekCheckBox = document.getElementById("podatek");
    var podatek

    if(podatekCheckBox.checked == true ) {
        podatek = true;
    } else {
        podatek = false;
    };
    

    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    document.getElementById("wynik").innerHTML = "Podatek to: " + wynik;
   
    
};
