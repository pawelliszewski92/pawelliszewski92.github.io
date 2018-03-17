//for(var i = 1; i <= 10; i++) {
//    console.log("Iteracja nr " + i )
//}

var tablica = ["Volvo", "Mazda", "Honda", "Audi"];

//for(var i =0; i < tablica.length; i++) {
//    console.log(tablica[i]);
//}


tablica.forEach(function(element, index) {
   console.log("Index: " + index + " Element: " + element);
});


//var iter = 0;
//while(iter <25) {
//    console.log("While iteracha nr " + iter);
//    iter++;
//}




//najpierw robimy, potem sprawdza warunek

//var iter = 1;
//do {
//    console.log("While iteracja nr " + iter);
//    iter++;
//} while (iter <= 25);


//break i continue przerywanie i wznawianie petli

//
//for (var i = 1; i < 15; i++) {
//    if(i > 6) {
//        break;
//    } else {
//        console.log ("Obrot petli nr " + i)
//    }
//}


for(var i = 1; i < 15; i++) {
    if(i == 4 || i==6 || i==10) {
        continue;
    } else {
        console.log("Iteracja nr " + i);
    }
}