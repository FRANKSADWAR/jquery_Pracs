
/**
 *   CSS animations are also supported here, we use the camelCase notation to write
 *   the properties and specify them in an object notation.
 *   You can only apply this methods over CSS properties that have numerical values
 *   
 */

$(function(){
    $('li').on('click ',function(){
        $(this).animate({
            opacity : 0.0,
            paddingRight : '+=30',
            borderTopWidth : '+=12'
        },500,function(){
            $(this).remove();
        });
    });
}); 

/**
 * An anonymous function runs when a user clicks on an li element triggering an animation
 * 
 * Inside the animation opacity and padding left are changed,this makes it appear as if the 
 * the element is moving right as it fades out
 * 
 * The animate method has two more parameters the speed which is 500ms and a callback anonymous function
 * indicating what should happen after the animation finishes
 * 
 * When animation has finished , the function removes the element using the .remove() methods
 */