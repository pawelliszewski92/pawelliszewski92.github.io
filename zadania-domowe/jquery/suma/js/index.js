$(function() {
    
var salaries = $('span.salary');


function sumSalaries(obj) {
  var sum = 0;
  for(var i = 0; i<obj.length; i++) {
      sum += parseInt(obj[i].innerHTML);
  }  
    return sum;
};
        
    
$("button").on('click', function() {
    $("#sum").html(sumSalaries(salaries)); 
    });

});