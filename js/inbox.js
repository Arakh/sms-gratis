$(document).ready(function(){
    cekLogin();
    $("#inbox").click(function(){
            $.mobile.showPageLoadingMsg();
            $("#linbox").empty();
            $.ajax({
                
                url: 'http://pekat.saungit.org/sms_mobile/inbox.php',
                data: {gid:sessionStorage.uid},
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'jsonpCallback',
                success: function(json){
                    
                    $.each(json.hasil, function(index,hasil){
                        $.mobile.hidePageLoadingMsg();
                        if(hasil.status=="sukses"){
                        //alert("sukses");
                        $("#linbox").append("<li><table><tr><td id=nomor>"+hasil.nomor+"</td></tr><tr><td>"+hasil.text+"</td></tr></li>");
                    }else{
                        $("#linbox").append("<li>Tidak Ada Pesan</li>");
                    }
            });
                }
            });
    });
    });