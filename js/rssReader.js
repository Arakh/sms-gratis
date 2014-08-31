$(document).ready(function(){

    var url="http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20feed%20WHERE%20url%3D'http%3A%2F%2Fwww.saungit.org%2Ffeeds%2Fposts%2Fdefault%2F'%20limit%2010&format=json&diagnostics=true&callback=";
    $.getJSON(url, function(json){
    $.mobile.showPageLoadingMsg();
        $.each(json.query.results.entry, function(i, news){
        $.mobile.hidePageLoadingMsg();
            $("#title-news").append("<li id=lis><a href='detailRssReader.html#!"+news.id+"'>"+news.title.content+"</a></li>");
        });
    });
});


