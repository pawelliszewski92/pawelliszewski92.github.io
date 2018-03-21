$(function(){
    
    
    $("#animationButton").on('click', function() {
       $("#animatedDiv").animate({
           left: '100px',
           width: '100px',
           height: '100px',
    },3000, 
    function() {
      $("#animatedDiv").animate({backgroundColor: 'blue'},
    5000,
    function() {
     $("#animatedDiv").find("h2").fadeIn("fast");  
      }); 
    });
   });
   
   
   
});