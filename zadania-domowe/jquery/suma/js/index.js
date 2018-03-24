$(function() {

//var salaryArray = $("div .salary");
//var salaries = [];
//        
//function salaryArrayCreation(array) {
//    for(i=0;i<array.length;i++) {
//    salaries.push(array[i].text());
//    }
//}
//    
//salaryArrayCreation(salaryArray);
//console.log(salaries);
    
    
$("#count-sum").on('click', function() {
   var salaryArray = $("div .salary").text();
   var sum = 0;
   for(i=0;i<salaryArray.length;i++) {
       sum += salaryArray[i];
   }
    console.log(sum);
    
});  
    
    
    
    
    
});