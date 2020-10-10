/**
 *  jQuery has several methods of subsetting from a selection
 *  The .filter() method  
 *  .has()  
 *  .is() which returns a boolean , 
 *  .not() 
 *  :contains
 *  :not() 
 *  :has()
 * 
 */

// The following mean the same, accomplish the same thing

//  $('li').not('.hot').addClass('cool');
//  $('li:not(.hot)').addClass('cool'); 

$(function(){
    var $listItem = $('li');        // a jQuery selection for li elements
    $listItem.filter('.hot:last').removeClass('hot');  //.addClass('complete'); // remove class hot from the last li element that has the hot class attribute
    
    //$listItem:not('.hot').addClass('cool');
    //$('li:not(.hot)').addClass('cool');
    $listItem.not('.hot').addClass('cool');

    $listItem.has('em').addClass('complete');   // finds the li element with em element within it and adds value of complete to the class attribute
 
    $listItem.each(function(){                  //  Loops through the list items 
        var $this = $(this);                    //  caches the current element in $this variable
        if($this.is('.hot')){                   //  checks if the current element has a class attribute of hot 
            $this.prepend('Priority item :');   // If it does have the class attribute,add the word 'priority item' at the start of the item
        }
    });
    $('li:contains("honey")').append('(local)');   // checks for li elements that contain the text "honey " and appends '(local)' at the end
}); 



console.log(typeof($('li:has(em)')))  ;   //  object
console.log(($('li:last').is('.hot')));   //  Boolean 

if($('li:has(em)')){
    console.log('Truthy value');
}


/**
 *  .has and :has can be used to test for truthy and falsy values although they return an 
 *  object.
 *  .is() returns a boolean
 */


/**
 * 
 *  Items in jQuery can also be filtered by order because the objects returned by a jQuery selection are array-like in nature.
 *  The methods here are 
 *  .eq()  elements eual to the provided index
 *  :lt()  elements less than the provided index
 *  :gt()  elements greater than the provided index 
 *
 *  */ 

$(function(){
    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(2)').hide().slideDown(1200);
}); 