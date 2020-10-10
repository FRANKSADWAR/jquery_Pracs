/**---- JQuery EVENTS--------
 * The .on() method is used to handle all events in jQuery
 * jQuery handles the cross-browser issues experineced in pure javascript code, so there is
 * no need to write fall back code for it.
 * The .on() method takes two parameters; the event you want to listen to and the function
 * to respond to the event occuring.
 * 
 */

$(function(){
    var ids = '';
    var $listItems = $('li');

    $listItems.on('mouseover click ',function(){
        ids = this.id;
        $listItems.children('span').remove();
        $(this).after('<span>' +ids + '</span>');
        //$(this).append('<span class = "priority">' +ids+ '</span>');
    });

    $listItems.on('click mouseout',function(){
        var $afterEl = $('span');
        $afterEl.remove();
    });
}); 


$(function(){
    $(".hot").wrap(function(){
        return "<div class= '"+$(this).text()+ "'></div>";
    });
});

/**
 * The .wrap() function wraps an html element on the matched sets.
 * It then assigns a class name to the div element which is the elements text.
 */




// In the code above, you can add events in the same set of quote marks with space in between them.
/**
 *  The .on() method triggers an anonymous function when a user clicks or moves a mouse
 *  
 *  It gets the value of the id attribute on that element , removes the span elements from all of 
 *  the list items and finally adds the value of the id attribute to the list item in a new <span>
 *  element
 *  
 *  The mouseout event prevents build-up of any span elements by removing them
 * 
 * 
 * 
 *  */ 