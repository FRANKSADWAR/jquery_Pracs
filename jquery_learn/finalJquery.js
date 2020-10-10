/***
 *  This final concept brings together Plain JS and jQuery concepts together:
 *    A list item can be added or removed from the <ul> element,through event 
 *    delegation.
 *    
 *    A counter function keeps track of the total number of items in the <ul> 
 *    element.
 *    
 *    A form exists though clicking a button that allows adding a new item into the list, assigning
 *    class of complete
 * 
 *    If  a list item does not have the class complete, its given the class complete, removed from its initiall position
 *    and added at the bottom of the list, a second click on this item will no remove it completely from the DOM Tree
 * 
 *    The .on() at the $list , uses event delegation and listens when a user clicks anywhere in the <ul> element , especially the <li>
 *    items and the the element that has been clicked on is cached on the $this variable as a jQuery object 
 * 
 *    Always add the javascript file at the bottom of the HTML file, all DOM elements will have loaded and
 *    the script will not slow down the page 
 */



$(function(){
    // SETUP THE VARIABLES 
    var $list,$newItemForm,$newItemButton;
    var item = '';
 
    $list = $('ul#items');                           //  The parent <ul> element
    $newItemForm = $('#newItemForm');                //  The add items form
    $newItemButton = $('#newBtnContainer');          //  The New item button  which when clicked, reveals the form
     
    $('li').hide().each(function(index){                  //  Display element in the <ul> element by hiding each list item,delaying by multiplying with its index
        $(this).delay(450 * index).fadeIn(1600);     //  And use fadeIn effect to bring the <li> element to view with each following the other
    });

    //LIST  ITEMS  COUNTER
    function updateCount(){
        var items = $('li[class!="complete"]').length;     // Get the number of list items  whose class is not complete
        $('#counter').text(items);                         // Update the text holding the counts
    }
    updateCount();

    // SETUP FORM FOR ADDING NEW LIST ITEMS
    $newItemButton.show();                           // Show the add button initially   
    $newItemForm.hide();                             // Hide the form initially
    
    $('#newItemBtn').on('click',function(){           // When the newItemButton is clicked
        $newItemButton.hide();                       // Now hide the newItemButton
        $newItemForm.show();                         // Now show the form
    });

    // ADDING A NEW LIST ITEM
    $newItemForm.on('submit',function(e){            // When the form is submitted
        e.preventDefault();                          // prevent default behaviour of forms which might take us to a new page
        var text = $('input:text').val();            // Get the value of the text inputed
        $list.append('<li>' +text+ '</li>');         // Create a new list item using the text inputted in the form, and append to the <ul> element
        $('input:text').val('');                     // Set the input text back to an empty string
        $newItemForm.hide();                         // Hide the form
        $newItemButton.show();                       // Show the initial button
        updateCount();                               // Update the counter
    });


    // CLICK HANDLING ----USES EVENT Delegation on to the <ul> element
    $list.on('click','li',function(){      // The signature of this .on() method takes the selector we want to act on,in this case its the <li> elements of the <ul> element     
        var $this = $(this);               // Cache the list item
        var complete = $this.hasClass('complete');     // Does the list item has a class of  complete        
        if (complete === true){            // If the <li> element has class attribute of complete   
            $this.animate({                // Use the animate method on it
                opacity:0.0,
                paddingLeft:'+=180'
            },500,'swing',function(){      // Use swing animation option for 500 ms
                $this.remove();          // Finally remove the element you have clicked on
            });
        }

        else{
            item = $this.text();          // get the text of the element
            $this.remove();               // remove the element from its current position
            $list.append('<li class=\"complete\">'+item+'</li>')    // take it to the bottom of the list having a class of complete
                 .hide()
                 .fadeIn(300);
            updateCount();               // Now update the count 
        }
    });

});



// This is whats to be done on the RoutesTable in the GISBI App

var tableRows = $('tr');
tableRows.on('change','input[type="checkbox"] ' ,function(e){
    e.preventDefault();
    var $this = $(this);
    // Get the specific cells  
    var routeGeom ;  // get the route geometry value, is there any type conversion need ? Remeber overflow was hidden in the Table Cell
    // Create text node
    // Append the text node to the div element on top of the map
    // Append the text node at the bottom table for investigation

    // We need the function to replace the items dynamically on another second click
});


