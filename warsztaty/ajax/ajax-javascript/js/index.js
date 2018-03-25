
//funkcja ktora strzelka do serwera i zwraca 
//ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//    function(data){console.log(data);})
//
//function ajax(method, url, callback) {
//    var httpRequest = new XMLHttpRequest();
//    
//    httpRequest.open(method, url);
//    httpRequest.onreadystatechange = function() {
//        if(httpRequest.readyState == 4) {
//            if(httpRequest.status == 200) {
//                var returnData = httpRequest.responseText;
//                var jsonObj = JSON.parse (returnData);
//                callback(returnData);
//                httpRequest = null;
//            }
//        }
//    }
//    
//    httpRequest.send();
//}



function ajax(method, url, callback) {
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open(method, url);
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState == 4) {
            if(httpRequest.status == 200) {
                var returnData = httpRequest.responseText;
                var jsonObj = JSON.parse(returnData);
                //przekazywanie danych do funkcji
                callback(jsonObj);
                httpRequest = null;
            }
        }
    }
    
    httpRequest.send();
}

var button = document.getElementById("pobierzDane");
var miejsce = document.getElementById("display");


button.addEventListener('click', function(event){
    event.preventDefault();
    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
    function(data){
        var newP1 = document.createElement("p");
        newP1.innerHTML = ("User Id: " + data.userId);
        miejsce.appendChild(newP1);
        
         var newP2 = document.createElement("p");
        newP2.innerHTML = ("User Name: " + data.userName);
        miejsce.appendChild(newP2);
        
         var newP3 = document.createElement("p");
        newP3.innerHTML = ("User URL: " + data.userURL);
        miejsce.appendChild(newP3);
        
         var newP4 = document.createElement("p");
        newP4.innerHTML = ("------------------------");
        miejsce.appendChild(newP4);
        
    });

});









////mozna to tez zrobic tak, że:
////tworzysz funkcje, oddzielna, ktora uklada elementy html np:
//function wrzucDoHtml(data) {
//    var newP1 = document.createElement("p");
//        newP1.innerHTML = ("User Id: " + data.userId);
//        miejsce.appendChild(newP1);
//        
//         var newP2 = document.createElement("p");
//        newP2.innerHTML = ("User Name: " + data.userName);
//        miejsce.appendChild(newP2);
//        
//         var newP3 = document.createElement("p");
//        newP3.innerHTML = ("User URL: " + data.userURL);
//        miejsce.appendChild(newP3);
//        
//         var newP4 = document.createElement("p");
//        newP4.innerHTML = ("------------------------");
//        miejsce.appendChild(newP4);
//        
//    };
////a potem w tym drugi, przypisanym do buttona bierzemy ja bez wywolywania:
//function pobierzDane(event) {
//    event.preventDefault();
//    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//    wrzucDoHtml);
//};
//
//
//button.addEventListener('click', function() {
//    pobierzDane(event);
//});