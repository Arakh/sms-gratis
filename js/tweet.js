$(document).ready(function(){
    cekLogin();
    function addlinks(data) {
        //Add link to all http:// links within tweets
         data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
            return '<a href="'+url+'" >'+url+'</a>';
        });
             
        //Add link to @usernames used within tweets
        data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
            return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" target="_blank">'+reply.charAt(0)+reply.substring(1)+'</a>';
        });
		//Add link to #hastags used within tweets
        data = data.replace(/\B#([_a-z0-9]+)/ig, function(reply) {
            return '<a href="https://twitter.com/search?q='+reply.substring(1)+'" style="font-weight:lighter;" target="_blank">'+reply.charAt(0)+reply.substring(1)+'</a>';
        });
        return data;
    }    
 $("#twitter").click(function(){
            $.mobile.showPageLoadingMsg();
            $("#twit").empty();
           $.ajax({
                url:"http://pekat.saungit.org/sms_mobile/getTweet.php",
               //data: {gid:sessionStorage.uid},
                dataType: "jsonp",
                jsonp: 'callback',
                jsonpCallback: 'jsonpCallback',
                success: function(json){
                    $.mobile.hidePageLoadingMsg()
                    $.each(json.hasil, function(index,hasil){
                        var status=hasil.text;
                        var stalink=addlinks(status);                                                
                        
                        $("#twit").append("<li id=list-twit><table><tr><td><img src="+hasil.user.profile_background_image_url+" height=75 width=75 /></td><td>"+stalink+"</td></tr></li>");
           });
                }
            });
  });
    });