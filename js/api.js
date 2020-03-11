function scrollToTickets() {

	var top = document.getElementById("buy_ticket").offsetTop;
	window.scrollTo({
		top: top,
		behavior: "smooth"
	});
}

function addLead(suffix) {
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
			if(json == 'ERROR' ) {
				alert(json)
			}
			else {
				suffixes = ['Header','Lead1','FormRUR','FormNTZ']
				suffixes.forEach(function(suff) {
					document.getElementById("userName"+suff).value = name.value;
					document.getElementById("userPhone"+suff).value = phone.value;
					document.getElementById("userEmail"+suff).value = email.value;
				});
				scrollToTickets();
			}
		}
	};
	var lead_request = {};
	lead_request['type']="add_lead";
	lead_request['lead']={};
	lead_request['lead']['name']=name.value;
	lead_request['lead']['phone']=phone.value;
	lead_request['lead']['email']=email.value;

	console.log(lead_request);
	var data = JSON.stringify(lead_request);
	console.log(data);
	xhr.send(data);
}

function addTicket(suffix) {
	var xhr = new XMLHttpRequest();
	var url = "/";
	var name = document.getElementById("userName"+suffix);
	var phone = document.getElementById("userPhone"+suffix);
	var email = document.getElementById("userEmail"+suffix);
	var ticketsNum = document.getElementById("ticketsNum"+suffix);
	
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			if(json == 'ERROR' ) {
				alert(json)
			}
			else {
				window.location = json;
			}
		}
	};
	var lead_request = {};
	lead_request['type']="add_order";
	lead_request['order']={};
	lead_request['order']['name']=name.value;
	lead_request['order']['phone']=phone.value;
	lead_request['order']['email']=email.value;
	lead_request['order']['ticketsType']=suffix;
	lead_request['order']['ticketsNum']=ticketsNum.value;

	if (suffix == "FormNTZ") {
		lead_request['order']['ntzLogin']=document.getElementById("userLoginFormNTZ").value;
	}

	console.log(lead_request);
	var data = JSON.stringify(lead_request);
	console.log(data);
	xhr.send(data);
}