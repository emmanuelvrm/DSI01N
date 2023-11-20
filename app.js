$("body").on("contextmenu",function(e){
    return false;
});

$("img").mousedown(function(e){
    e.preventDefault()
});

$("#searchresults img").mousedown(function(e){
    e.preventDefault()
});