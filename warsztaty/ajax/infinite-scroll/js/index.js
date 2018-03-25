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




ajax("GET", "https://jsonplaceholder.typicode.com/users", function(data) {
   console.log(data); 
});



