$(document).ready(function(){
               cekLogin();
                $("#sendGroup").submit(function(){
                    $("input:hidden[name='gid']").val(sessionStorage.uid);
                    $.mobile.showPageLoadingMsg();
                    
                    $.ajax({
                        
                        url: "http://pekat.saungit.org/sms_mobile/send.php", 
                        type: "GET", 
                        dataType: "jsonp", 
                        jsonp: "getSendStatus", 
                        data: $("form#sendGroup").serialize(), 
                        success: function(response){
                            $.mobile.showPageLoadingMsg();
                            if(response.status=="sukses"){
                                     $.mobile.hidePageLoadingMsg();
                                      alert("sms berhasil dikirim");
                                    $.mobile.changePage("#mainmenu", {transition: "slide", reverse: false});                       
                            }else{
								$.mobile.hidePageLoadingMsg();
                                 alert("gagal kirim sms");
							}
                            }
                    });
                    return false;
				});
                
            });