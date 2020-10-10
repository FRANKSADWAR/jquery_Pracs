/**We can use the jQuery methods such as .html() , .text() , .replaceWith() and .remove() to update elements. 
 * The .html() .text() and .replaceWith() can take a string as a parameter,the string can contain markup.
*/


$('li.hot').html(function(){
    return '<em>' + $(this).text() + '</em>';   // Return indicates that contents should be returned by the function
                                                // this refers to the current list item
});

/**--------Working with ATTRIBUTES ------ 
 * 
 * jQuery has methods such as :
 *  addClass()  ------>  Adds a new value to the class attribute, an element can have multiple classes separated by space between the class names
 *  removeClass() ---->  This method removes a value from the class attribute leaving other class attributes intact
 *  attr()------------>  This method gets or sets a specified attribute and its value
 *  removeAttr() ----->  This method removes a specified  attribute and its value 
*/


$(function(){
    $('li#three').removeClass('hot');
    $('li.hot').addClass('favorite');
    $('ul').attr('id','group');
});


/***----- Getting and setting CSS properties-----
 * Using the .css() method css properties can be got or set,
 * if there exists similar CSS properties in the .css file the 
 * they get overwritten  by the properties provided with this method.
 */

 $(function(){
    var $color = $('li').css('background-color');
    $('ul').after('<p> Background Color is :'+$color + '</p>');
    $('li').css({
        'background-color':'#ffcc00',
        'border':'1px solid #ffffff',
        'font-family':'Courier,monospace',
    });
 });