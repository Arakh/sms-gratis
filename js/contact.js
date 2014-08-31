function getContact(){
	obj = new ContactFindOptions();
	obj.filter = document.getElementById("number");
	obj.multiple = true;
	navigator.contact.find(
		["displayName","name","phoneNumbers","emails","urls","note"],
		function(contacts){
			var s="";
			if (contact.length == 0){
				alert('Kontak Tidak Ditemukan');
			}
			else{
				for(var i=0; i<contact.lenght; i++){
					alert(contact.name.formattted);
					alert(contact.phoneNumber);
				}
			}
		}
	)
}