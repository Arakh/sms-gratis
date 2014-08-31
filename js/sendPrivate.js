$(document).ready(function(){
                cekLogin();
               
                $("#sendPrivate").submit(function(){
                    $("input:hidden[name='uid']").val(sessionStorage.uid);
                    $.mobile.showPageLoadingMsg();
                    
                    $.ajax({
                        
                        url: "http://pekat.saungit.org/sms_mobile/send_private.php", 
                        type: "GET", 
                        dataType: "jsonp", 
                        jsonp: "getSendStatus", 
                        data: $("form#sendPrivate").serialize(), 
                        success: function(response){
                            $.mobile.showPageLoadingMsg();
                            if(response.status=="sukses"){
                                     $.mobile.hidePageLoadingMsg();
                                      alert("sms berhasil dikirim");
                                      $('#sendPrivate').each (function(){
                                        this.reset();
                                        });
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