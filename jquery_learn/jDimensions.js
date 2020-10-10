/***
 *  Given that CSS treats everything as if its in its own box, we can change the box 
 *  dimensions of the elements using methods such as .height() , .width(), 
 *  .outerWidth()   ----> with padding and border 
 *  .innerWidth()   ---->with padding and  no border
 *  .outerWidth(true) ----> width plus padding,border,margin
 * 
 * 
 */

$(function(){
    var parentUlHeight = $('#page').height();       // get the selection's height and add to the DOM Tree after the selection
    var newP = $('<p>'  +parentUlHeight+ 'px </p>');
    
    newP.css({                          // set the styling for the new element
        'color':'#ffffff',
        'text-align':'center',
        'font-size':'1.2em'
    });
    
    $('#page').after(newP);

    $('li').width('50%');      // set the width to FIFTY percent of the initial width
    $('li#one').width(125);    // set the width to 125px
    $('li#two').width('75%');  // set the width to 75 percent of the original with
});