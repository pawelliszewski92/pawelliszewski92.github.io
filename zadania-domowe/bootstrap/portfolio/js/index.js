$( function(){
   
    $("a[href^='#']").on('click', function(e) {
       e.preventDefault();
       var target = $(this).attr('href');
        
       $("body, html").animate(
       {scrollTop: $(this.hash).offset().top}, 200);
    });
    
    
    
    
    
});

