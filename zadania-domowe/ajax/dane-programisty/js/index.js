$(function(){
    
    
    $("button").on('click', function() {
       $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
       $('body').append('<div class="dane-programisty"></div>');
       $('.dane-programisty').append("<p>firma: " + data.firma + "</p>"); 
       $('.dane-programisty').append("<p>imię: " + data.imie + "</p>"); 
       $('.dane-programisty').append("<p>nazwisko: " + data.nazwisko + "</p>"); 
       $('.dane-programisty').append("<p>zawód: " + data.zawod + "</p>"); 
      $('.dane-programisty').append("-------------------------"); 
        
    }); 
    });
   
    
    
});