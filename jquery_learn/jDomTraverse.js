/**
 *  jQuery provides methods that can access other element nodes relative to the selected node.
 *  Methods such as .find() and .closest() require a selector to be provided
 *  
 * Methods such as parent() , parents() , siblings() , children() , nextAll, next() , prev() , prevAll(): the selector
 *  is optional
 * 
 */
$(function(){
    var $h2 = $('h2');
    
    $h2.text(' '); 
    $('ul').hide();
    
    var $linkEl = $('<a href="#">Show</a>');
    
    $linkEl.css({
        'text-align':'center',
        'text-decoration':'none',
        'color':'#ffffff',
        'font-size':'0.9em'
    });
    $h2.append($linkEl);
    
    $h2.on('click' , function(){
        $h2.next().next()   // find the ul element by getting to the next element after the next element of the h2 element
           .fadeIn(500)
           .children('.hot')
           .addClass('complete');
        $h2.text('LIST KING');   
        $h2.find('a').fadeOut(500);     // find the <a> element in <h2> and fade it out because the list is now being shown to users, we could also 
                                        // use the .siblings() method to find the element
    });

    var allTxt = $('#header').children('a').text();
    var newP = $('<p>'+allTxt + '</p>');
    newP.css({
        'color':'#ffffff'
    });
    $('#page').after(newP);

});

/**
 *  The code above start by selecting the h2 element and storing it in a variable,then updating the text content
 *  to an empty string
 *  
 *  Then hiding the ul element initially 
 *  A new <a> element is created and added to the h2 element with its styling
 *  On clicking the h2 element the code inside the click event is executed
 */