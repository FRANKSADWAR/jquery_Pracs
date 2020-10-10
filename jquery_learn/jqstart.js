/**----JQuery is a JS file that can achieve much of what the pure JavaScript can achieve,its advantages:
 *       Cross browser compatibility and easy to use selection mechanisms.
 */

//$(':header').addClass('headline');     // select all headers from h1 to h6 and add class headline to each
//$('li:lt(3)').hide().fadeIn(1500);     // select the first three list items,hide and fade in
//$('li').on('click',function(){         // Add a click event to remove an element when clicked on 
//    $(this).remove();               
//});


/**Caching jQuery objects involves assigning a variable to the selection and 
 * using it later
 */


var $listItems = $('li'); 

/**
 * Method chaining involves adding methods to a selection.Most methods that
 * update jQuery selections are chained although methods that retrieve information
 * cannot be chained
 * 
 * */
//$('li[id="four"]').hide().delay(500).fadeIn(1000);  


/**GETTING AT CONTENT */

var $listParent = $('ul');

var $listHTML = $('ul').html();  // returns the markup in the ul  children elements,that is the li elements
$('ul').append($listHTML);       // Append the listHTML at the end of the selection

var $itemsText = $('ul').text();  // Gets the texts
$('ul').append('<p>'  +$itemsText+  '</p>'); // Append the text to the end of the selection in a p element

var $listItemHTML = $('li').html(); // returns the first element's mark up it matches
$('li').append('<i>' +$listItemHTML + '</i>');  // append the mark up onto each of the li elements

var $listItemsText = $('li').text() ;  // gets the text of all the li elements,with the white spaces and no space between individual list items
$('li').append('<strong>' +$listItemsText+ '</strong>'); // append the text 



