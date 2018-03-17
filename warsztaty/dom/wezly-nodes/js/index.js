var parFirst = document.getElementById("parFirst");

//pobranie rodzica
//console.log(parFirst.parentElement);

//pobieranie wezlow dzieci
//jako wezel traktowany jest zarpwno tekst jak i tag
//biale znaki tez sa traktowane jako wezel - w tym przypadku tabulator pomiedzy divem a p wyswietlany jest jako element 0 - text
//console.log(parFirst.childNodes);

//pobieranie samych dzieci (tylko elementy html)
//console.log(parFirst.children);


//pobieranie pierwszego elementu z pobranych dzieci
//console.log(parFirst.children[0]);



//pobieranie nastepnego elementu (rodzenstwa)
//var pierwszeDzieciko = parFirst.children[0];
//console.log(pierwszeDzieciko.nextElementSibling);
//
////next sibling wybiera nie tylko elementy html
//console.log(pierwszeDzieciko.nextSibling);


//pobieranie ostatniego elementu (węzła i elementu)
//console.log(parFirst.lastChild);
//console.log(parFirst.lastElementChild);


//NODE TYPE

var parFirstNodes = parFirst.childNodes;

for(i=0;i<parFirstNodes.length;i++) {
    if(parFirstNodes[i].nodeType==1) {
    console.log(parFirstNodes[i])
   }
}