$(document).ready(function(){
    var locate = " "+window.location;
    var pattId =/#!/g;
    var indexId;
    while (pattId.test(locate)==true)
    {   
        indexId=pattId.lastIndex;
    }
    
    var id = locate.substring(indexId);
    var url="http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20feed%20WHERE%20url=%27http://www.saungit.org/feeds/posts/default/%27AND%20id=%27"+id+"%27&format=json";
    $.getJSON(url, function(json){
    $.mobile.showPageLoadingMsg();
		$("#title-news").append("<h1>"+json.query.results.entry.title.content+"</h1>");
           $("#content-news").append("<p>"+json.query.results.entry.content.content+"</p>");
           $.mobile.hidePageLoadingMsg();
        
    });
});


