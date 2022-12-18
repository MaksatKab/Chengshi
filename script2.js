
function Fregister(){
	if(document.getElementById('fullname').value!="" & document.getElementById('email').value!="" & document.getElementById('password').value!="" & document.getElementById('phoneNum').value!=""){
		localStorage.setItem("fullname", document.getElementById('fullname').value);
		localStorage.setItem("email", document.getElementById('email').value);
		localStorage.setItem("password", document.getElementById('password').value);
		localStorage.setItem("phoneNum", document.getElementById('phoneNum').value);
		
		window.location.href = "Formcomplete.html";
	}
	else{
		document.getElementById('warning').innerHTML="填写所有字段。";
	}
}


function validation(){
	
	if (localStorage.getItem("email")==document.getElementById('emailL').value & localStorage.getItem("password")==document.getElementById('Password').value) {
		window.location.href = "index.html";
	}
	
	else{
		document.getElementById('warning').innerHTML="无效数据，可能是一个错误。 再试一次！"
	}
}
