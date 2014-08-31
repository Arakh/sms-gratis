$(document).ready(function(){
                
                $("#error").hide();
                $("#masuk").submit(function(){
                    $.mobile.showPageLoadingMsg();
                    
                    $.ajax({
                        //  $.post("user.php",$("#masuk").serialize());
                        //data
                        // alert("galau");
                        url: "http://pekat.saungit.org/sms_mobile/user.php", 
                        type: "GET", 
                        dataType: "jsonp", 
                        jsonp: "getCallStatus", 
                        data: $("form#masuk").serialize(), 
                        success:function(response){
                            $.mobile.showPageLoadingMsg();
                            if(response.status=="sukses"){
                                     $.mobile.hidePageLoadingMsg();
                                     sessionStorage.uid=response.uid;
                                     sessionStorage.nama=response.nama;
                                    
                                $.mobile.changePage("#mainmenu", {transition: "slide", reverse: false});
                                    //alert("anda telah berhasil login");                       
                            }else{
								$.mobile.hidePageLoadingMsg();
                                $("#error").show();
							}
                                //alert(response.status);
                            }
                        
                    });
                    return false;
				});
                
            });
        
        
function cekLogin(){
    if((!sessionStorage.uid)&&(sessionStorage.uid=="")){
                    $.mobile.changePage("#formLogin", {transition: "slide", reverse: false});
                    exit;
                }
}

function logout(){
    sessionStorage.uid="";
    $.mobile.changePage("#formLogin", {transition: "slide", reverse: false});
                
}