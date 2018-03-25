$(function() {
    


function wrzucDane(data) {
    $(".display").append("<p> User Id: " + data.userId + "</p>");
    $(".display").append("<p> User Name: " + data.userName + "</p>");
    $(".display").append("<p> User URL: " + data.userURL + "</p>");
    $(".display").append("-----------------");

}

    
    $(".pobierz").on('click', function(event) {
       event.preventDefault();
       $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", wrzucDane);
        
    });


});