/**
 *  jQuery handles animations and  effects, CSS3 does this well too
 * 
 *
 */

$(function(){
    $('h2').hide().slideDown(1400);    // To apply slideDown effect you have to hide the element first
    var $li = $('li');
    
    $li.hide().each(function(index){
        $(this).delay(700 * index).fadeIn(700); // Delay execution of subsequent items in queue
    });
    
    $li.on('click', function(){
        $(this).hide().slideDown(1500); // Slide down the elements when clicked
    });
}) ;
