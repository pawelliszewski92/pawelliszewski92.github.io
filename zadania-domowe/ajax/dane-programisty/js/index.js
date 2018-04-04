$(function(){
    
    
    $("button").on('click', function() {
       $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
       $('body').append('<div id="dane-programisty">' +
                        "<p>firma: " + data.firma + "</p>" +
                        "<p>imię: " + data.imie + "</p>" +
                        "<p>nazwisko: " + data.nazwisko + "</p>" +
                        "<p>zawód: " + data.zawod + "</p>" +
                        "<p>-------------------------</p>" +
                        '</div>');
        
    }); 
    });
   
    
    
});