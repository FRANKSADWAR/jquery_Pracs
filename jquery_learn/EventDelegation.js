/***
 * Event Delegation in jQuery was previously handled by the .delegate() method for delegation,
 * but now the .on() method can be used 
 */

$(function(){
    var listItem,itemStatus,eventType;
    var newEl = $('<p id="notes"></p>');
    var parentList = $('#items');
    parentList.after(newEl);

    parentList.on('click mouseover',':not(#four)',{status:'important'},function(e){
        listItem = 'Item: ' +e.target.textContent + '<br/>';
        itemStatus = 'Status: ' +e.data.status + '<br/>';
        eventType = 'Event: ' +e.type;
        $('#notes').html(listItem + itemStatus + eventType);

    });

    $('#notes').css({
        'color':'#ffffff',
        'font-size':'1.2em',
        'text-align':'center',
    });
});

/**
 *  We create a new element an insert it to the DOM Tree to hold the text to be written onto it.
 *  The event parameter on the parentList variable are the events as click and mouseover events, 
 *  the selection is filtered so that the event is not triggered on the li element with id value
 *  of four.
 *  Additional data is provided by object notation in the curly braces
 *  The event object provides the properties to be written into the p element
 * 
 *  The styling of the <p> element using the .css() method then finishes 
 * 
 */