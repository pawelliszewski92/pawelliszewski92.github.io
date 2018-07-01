 // var url1 = 'https://blockchain.info/pl/ticker'


$(document).ready(function(){

    function pobierzKursBitcoin(url) {
        $.getJSON(url, function(data) {
           
            var currentBuyPrice = parseFloat( $('#buy').html());
            var currentSellPrice = parseFloat( $('#sell').html());
            var buyArrow = $('#buy-arrow');
            var sellArrow = $('#sell-arrow');
            
            $('#buy').html(data.PLN.buy);
            $('#sell').html(data.PLN.sell);
            
            if(currentBuyPrice > parseFloat(data.PLN.buy)) {
                buyArrow.css('color', 'red').removeAttr('class').addClass('fas fa-arrow-down');
            } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
               buyArrow.css('color', 'green').removeAttr('class').addClass('fas fa-arrow-up');
            } else {
                buyArrow.css('color', 'black').removeAttr('class').addClass('fas fa-minus-square');
            };
            
               if(currentSellPrice > parseFloat(data.PLN.sell)) {
                sellArrow.css('color', 'red').removeAttr('class').addClass('fas fa-arrow-down');
            } else if (currentSellPrice < parseFloat(data.PLN.sell)) {
               sellArrow.css('color', 'green').removeAttr('class').addClass('fas fa-arrow-up');
            } else {
                sellArrow.css('color', 'black').addClass('fas fa-minus-square');
            };
            
            console.log(data.PLN.buy);
        });
    }
   
    pobierzKursBitcoin('https://blockchain.info/pl/ticker');
    
    $('button').on('click', function() {
        pobierzKursBitcoin('https://blockchain.info/pl/ticker');
    });
});