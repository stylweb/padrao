/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var indexTime = 0;
var index = 0;
var widthBanner = 350;
var numberOfBanner = ("#carouse > li").lenght;

$(document).ready(function()
{
    $("#home").fadeIn("slow");

    $(".box > img").animate({
        left: "-600"
    }, 5000, function() {
// Animation complete.
    });

/*    $('#banner-control-next').click(function() {
        $("#carousel").animate({
            marginLeft: "-" - widthBanner 
        }, 1000, function() {
        });
    });
     $('#banner-control-previous').click(function() {
        index --;
        $("#carousel").animate({
            marginLeft: "+350"
        }, 1000, function() {
        });
    });*/
    
});

