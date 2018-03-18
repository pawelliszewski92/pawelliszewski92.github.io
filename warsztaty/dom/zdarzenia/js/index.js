//var paragraf = document.getElementById("par2");
//
////SPOSOB I
//function obsluzZdarzenie(event) {
//    console.log("click");
//    console.log(event.type);
//}
//paragraf.onclick = obsluzZdarzenie;
////tutaj nie uzywamy nawiasow do wywylywania funkcji
//
//
//
////SPOSB II
//paragraf.onclick = function(e) {
//    console.log("Do obslugi zdarzenia przypisana funkcja anonimowa");
//}
//
//
////SPOSOB III
//var counter = 0;
////paragraf.addEventListener("mouseenter", function(event) {
////    counter++;
////    console.log(event.type);
////    console.log("Zdarzenie wywolane" + counter + "raz");
////});
//
//
//var title = document.getElementById("main_header");
//
////title.addEventListener("mouseenter", function() {
////    title.style.fontSize = "70px";
////});
////
////title.addEventListener("mouseleave", function() {
//////    title.style.fontSize = "unset";
//////});


// ---------------------------------------------------------
////var body = document.querySelector("body");
////console.log(body);
////
////function bodyColor() {
////   
////
////     if(body.style.backgroundColor == 'white') {
////          body.style.backgroundColor = "red";
////     } else if(body.style.backgroundColor == 'red') {
////          body.style.backgroundColor = 'white';
////     }
////}
////
////
////title.addEventListener("click", bodyColor);
//
//
//document.querySelector('.link1').addEventListener('click', function(event){
//    event.preventDefault();
//    console.log("kliknąłem link klasy .link1")
//});
//------------------------------------------------------------





//stop propagation

var div = document.getElementById("parFirst");
var par = document.getElementById("par2");





