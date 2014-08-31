$(document).ready(function(){
                cekLogin();
                $("#sendJadwal").submit(function(){
                    $("input:hidden[name='uid']").val(sessionStorage.uid);
                    $.mobile.showPageLoadingMsg();
                    
                    $.ajax({
                        
                        url: "http://pekat.saungit.org/sms_mobile/send_jadwal.php", 
                        type: "GET", 
                        dataType: "jsonp", 
                        jsonp: "getSendStatus", 
                        data: $("form#sendJadwal").serialize(), 
                        success: function(response){
                            $.mobile.showPageLoadingMsg();
                            if(response.status=="sukses"){
                                     $.mobile.hidePageLoadingMsg();
                                      alert("jadwal sms berhasil dikirim");
                                      $('#sendJadwal').each (function(){
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