
$(function(){
    var $window = $(window);
    var $slideAd = $('#slideAd');
    var endZone = $('#footer').offset().top - $window.height() - 50;
    
    console.log(endZone);
    
    $window.on('scroll',function(){
        if((endZone) < $window.scrollTop()){
            $slideAd.animate({'right':'0px'},250);
        }
        else {
            $slideAd.stop(true).animate({'right':'-360px'},250);
        }
    });
});


// To change the map width and height dynamically, not when scroll  ..... resized
//var $mapdiv = $('#map');
//var mapHeight = $mapdiv.height();
//var mapWidth = $mapdiv.width();
//var maptopPost = $mapdiv.offset().top;
//var mapleftPos = $mapdiv.offset().left;

//$mapdiv.on('scroll',function(){
//    mapHeight = mapHeight + maptopPost;
//    mapWidth = mapWidth + mapleftPos;
//});