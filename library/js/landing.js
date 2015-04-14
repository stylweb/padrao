/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var indexColor = 0;

$(document).on('ready', function() {

    $('#landing-iframe').hide();
    $('#t13-logo').hide();
    $('h1').hide();
    $(this).hide();
    $('#t13-logo').fadeIn(5000);
    $('h1').fadeIn(5000);
    $('#landing-iframe').fadeIn(5000);
    $('#landing-iframe').addClass('active');
    $('body').animate({backgroundColor: '#0b0b0d'});
    
    $('h1').on('click', function(){
        $('body').animate({backgroundColor: '#983746'});
         $('body').animate({color: '#000000'});
    });

});
