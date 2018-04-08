$("a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var target = $(this).attr('href');
    
    $('html, body').animate(
    {scrollTop: $(this.hash).offset().top},300);
    
    
});