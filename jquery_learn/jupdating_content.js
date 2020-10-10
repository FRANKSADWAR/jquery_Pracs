/**Updating content 
 * 
 *  Both .html() and .text() methods can be used to update content and they replace the existing content together with its child contents
 *  The .replaceWith() and .remove() methods also replace and remove elements and their child elements
 * A function can also be used to update content
 * 
*/
var $firstItem =  $('li#one');
$firstItem.text('Red Chilli');  // Update the text of the first li element

var brocolli = 'Brocolli';
var $secondItem = $('li#two');
$secondItem.html('<i>' + brocolli+ '</i>' );  // Update the child elements including any mark up

$('li.hot').html(function(){
    return '<strong style="font-size:15px;">' +$(this).text()+ '<strong>';  // content should be returned by the function,this refers to the current list item
}); // Update each of the li elements of class hot with its text that has been made bold and increases the font-size of each 
