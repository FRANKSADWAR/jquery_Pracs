/**Content can be updated using a string,a function or a variable 
 * 
 * We start using the $(document).ready(function(){
 * }) here, that is its shortcuut $(function(){});
 * 
 * The first line of the code below selects any list items that contain
 * the word pine and changes the text of the matching elements to 
 * almond.
 * 
 * The next anonymus function inside the .html() updates the content of
 * the li elements of class hot by making them bold
 * 
 * The last line removes the li element whose id value is one
*/
$(function(){
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function(){
        return '<strong>' +$(this).text()+ '</strong>';
    });
    $('li#one').remove();
});


/**Adding new content using jQuery can be compared side by side with adding content
 * using DOM Methods.
 * The procedures below compares the two methods of adding new elements to the
 * DOM Tree.
 */

 
// DOM methods with plain JS IIFEs for scope
(function(){
    var texts = 'Where have we been ?'+ '\n\n' + 'Lost enough already';
    var estPos = document.getElementById('page');
    var elNew = document.createElement('div');
    
    var textNode = document.createTextNode(texts);
    elNew.appendChild(textNode);
    estPos.appendChild(elNew);
    estPos.insertBefore(elNew,estPos.lastChild);
}());




/**  Using jQuery....we use .before() , .after(), .append() and .prepend() or 
 *   .appendTo() and .prependTo()
 * 
 */

$(function(){
    var $newListItem = $('<li><em>glutten-free</em> Soy sauce</li>');   //crrate a  new list item
    $('li:last').after($newListItem); // add the list item after the last list item

    $('ul').before('<p class = "notice">Just updated by jQuery </p>'); // Add  a paragraph before the ul element
    $('li.hot').prepend('+ ');  // Add a plus sign before the start of the selection's text


    // Adding a div element with nodes
    var $newDiv = $('<div id = "content"> </div>');
    $('div#page').after($newDiv);
    $('div#content').append('<p style="color:red">Here</p><br/> <p style="color:green">Now</p>');

});


