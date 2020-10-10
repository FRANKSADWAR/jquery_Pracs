/**
 *  JQuery allows creating,removing,duplicating and moving around elements with the its methods such as
 *  .remove() ---->  remove an element with its DOM elements from the DOM tree and all its descendants
 *  .detach() ---->  remove an element from the DOM keeping it memory
 *  .empty()  ---->  removes child nodes from matched set
 *  .clone()  ---->  create a copy of the matched set including its descendants and text nodes ***
 *  .unwrap() ---->  removes parents of matched set leaving matched set only
 *  
 */

$(function(){
    var $p = $('p');
    var $clonedQuote = $p.clone();
    $p.remove();
    $clonedQuote.insertAfter('h1');

    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');
}); 