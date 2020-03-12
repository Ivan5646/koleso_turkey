function addOrder(suffix) {
	document.getElementById("send_rur").disabled = true;
	document.getElementById("send_ntz").disabled = true;
	var xhr = new XMLHttpRequest();
	var url = "/";
	var name = document.getElementById("userName"+suffix);
	var phone = document.getElementById("userPhone"+suffix);
	var email = document.getElementById("userEmail"+suffix);

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			if(json.startsWith('ERROR') ) {
				document.getElementById("send_rur").disabled = false;
				document.getElementById("send_ntz").disabled = false;
				alert(json)
			}
			else {
				window.location = json;
			}
		}
	};
	var lead_request = {};
	var items=[];
	var els = document.getElementsByClassName("items_quantity");
	Array.from(els).forEach((el) => {
		items.push({name:el.id, quantity:el.value});
	});
	lead_request['type']="add_order";
	lead_request['order']={};
	lead_request['order']['name']=name.value;
	lead_request['order']['phone']=phone.value;
	lead_request['order']['email']=email.value;
	lead_request['order']['orderType']=suffix;
	lead_request['order']['delivery_text']='';
	lead_request['order']['items']=items;

	if (suffix == "FormNTZ") {
		if (document.getElementById("userLogin"+suffix).value != ""){
			lead_request['order']['ntzLogin']=document.getElementById("userLogin"+suffix).value;
		}
		else{
			alert("You must set NTZ login");
		}
	}

	var data = JSON.stringify(lead_request);
	xhr.send(data);
}
