$( function(){
    
    
    //smooth scroll
   
    $("a[href^='#']").on('click', function(e) {
       e.preventDefault();
       var target = $(this).attr('href');
        
       $("body, html").animate(
       {scrollTop: $(this.hash).offset().top}, 400);
    });
    
    //changing nav background
    
    $(window).on('scroll',function(){
        var navOffset = $("#main-nav").offset().top;
        
        if (navOffset > 100) {
            $("#main-nav").addClass("scrolled");
        } else {
            $("#main-nav").removeClass("scrolled");
        }
    })
    
});

console.log($("#main-nav").offset().top);

