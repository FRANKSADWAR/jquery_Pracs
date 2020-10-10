/**------ Working with each element in SELECTION -------
 * 
 * Using the .each() method , the looping functionality is recreated in jQuery.
 * Although the selections such as $('li') returns a matched set, you may want to 
 * loop over each element to : 
 *   Get information from each element
 *   Perform a series of actions on each element
 * 
 * The parameter of the .each() method can be a named function or an anonymous function. 
 *   this keyword allows access to the properties of the selection
 *   $(this) allows for acting on each of the selection using jQuery methods, because it 
 *   creates a jQuery selection.
 * The .each() method takes one paramater,the function you want to run on each element
 * 
 */


$(function(){
    $('li').each(function(){
        var ids  = this.id;
        var texts = this.textContent;
        $(this).after('<span class="order">'+ids, +'text is: '+texts + '</span>');
    });
}); 