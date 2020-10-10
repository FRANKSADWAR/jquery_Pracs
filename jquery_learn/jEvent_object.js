/**
 *  The EVENT Object in jQuery is passed to the functiion that acts when an event occurs as 
 *  a parameter.Its denoted by the e shorthand so its properties and methods can be accessed 
 *  using the e object.
 * Properties of the event object in jQuery include target, type, data, which,timeStamp, pageX,pageY
 * 
 */
$(function(){
    $('li').on('click mouseover',function(e){
        $('li span').remove();
        var date = new Date();
        date.setDate(e.timeStamp);
        var clicked = date.toDateString();
        $(this).append('<span class="date">' + clicked + ' '+ e.type+ '</span>');
    });
});

/**
 * create a  new date object and set it to the time the event occured
 * Convert the date into a readable format and add it to the li element together
 * with the type of event that has occured
 * Note that the timeStamp property does not work in FireFox
 */


