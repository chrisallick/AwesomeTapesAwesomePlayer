$(document).ready(function() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if( request.type == "msg" ) {
            console.log( request.msg );
        }
    });

    // look through all songs and build an array
    // pass that array to background page player
    var songs = new Array();
    $(".wpaudio").each(function(val,index){
        var src = $(this).attr("href");
        songs.push( src );
    });
    //console.log( songs );
    chrome.runtime.sendMessage({type:"songs",data:songs},function(response) {
        console.log(response);
    });
});