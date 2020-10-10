/**
 * jQuery allows selecting form elements using selectors such as
 *  :button
 *  :checkbox
 *  :checked
 *  :submit
 *  :selected
 *  :reset
 *  :text
 */

$(function(){
    var $newItemButton = $('#btnItem');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');
    var $newBtn = $('#newBtn');

    $newItemButton.show();  // show the button indicating to add a new item
    $newItemForm.hide();    // hide the form

    $newBtn.on('click',function(){
        $newItemButton.hide();      // on clicking the add new Item button , hide it and show the form 
        $newItemForm.show();
    });

    var $noteText = $('#formNote');

    $newItemForm.on('submit',function(e){          // passing the event object to access its properties
        e.preventDefault();                        // prevent default behaviour of forms , prevent it from getting submitted
        var newText = $('input:text').val();       // get the value of the text  input  of the form
                                       // check whether there is data in the input
        $('li:last').after('<li>'+newText+'</li>');   // create a new jQuery object and add it to the DOM after the last <li> element in the <ul> element

        $newItemForm.hide();                        // hide the form after inputing a new element
        $newItemButton.show();                     // show the initial add Item button
        $textInput.val(' ');                         // reset the form's input text value to an empty string 

    });
    
    if ( typeof($('input:text').val())== String) {
        console.log('Yes');
    }
    else{
        console.log('No');
    }


    

}); 
