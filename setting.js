// window.addEventListener('onkeydown', function(event) {
var c = []
var v = [] 
var setPassword = function setPassword()
{
  // array code;
  // document.getElementById('bi').focus()
  localStorage.code1=""
  localStorage.code2=""
  localStorage.code3=""
  localStorage.code4=""
  if(b1.value!=""){
	// document.getElementById('bi').blur()
	document.getElementById('b2').focus()
	localStorage.code1 = document.getElementById("b1").value;
	console.log(localStorage.code1)
	// c[1] = document.getElementById("b1").value;
	// console.log(c[1])
  }
  if(b1.value && b2.value!=""){
	// document.getElementById('b2').blur()
	document.getElementById('b3').focus()
	localStorage.code2 = document.getElementById("b2").value;
	console.log(localStorage.code2)
	// c[2] = document.getElementById("b2").value;
	// console.log(c[2])
  }
  if(b1.value && b2.value && b3.value !=""){
	// document.getElementById('b3').blur()
	document.getElementById('b4').focus()
	localStorage.code3 = document.getElementById("b3").value;
	console.log(localStorage.code3)
	// c[3] = document.getElementById("b3").value;
	// console.log(c[3])
  }
  if(b1.value && b2.value && b3.value &&b4.value !=""){
	
	localStorage.code4 = document.getElementById("b4").value;
	console.log(localStorage.code4)
	document.getElementById('b5').focus()
	// c[4] = document.getElementById("b4").value;
	// console.log(c[4])
  }
 }
 /******* setPassword 有一個要求，再輸入四位數密碼時，必須要再按一個任意鍵 
  才能使 v1.value && v2.value && v3.value &&v4.value !=""
  成立  *********/
var showPassword = function showPassword()
 {
	console.log(localStorage.code1)
	console.log(localStorage.code2)
	console.log(localStorage.code3)
	console.log(localStorage.code4)
 }
var vertify = function vertify()
 {
 	if(v1.value!=""){
  	// document.getElementById('bi').blur()
  	document.getElementById('v2').focus()
    localStorage.vrfy1 = document.getElementById("v1").value;
    console.log(localStorage.vrfy1)
  	// v[1] = document.getElementById("v1").value;
  	// console.log(v[1])
  }
  if(v1.value && v2.value!=""){
  	// document.getElementById('b2').blur()
  	document.getElementById('v3').focus()
    localStorage.vrfy2 = document.getElementById("v2").value;
    console.log(localStorage.vrfy2)
  	// v[2] = document.getElementById("v2").value;
  	// console.log(v[2])
  }
  if(v1.value && v2.value && v3.value !=""){
  	// document.getElementById('b3').blur()
  	document.getElementById('v4').focus()
    localStorage.vrfy3 = document.getElementById("v3").value;
    console.log(localStorage.vrfy3)
    console.log(localStorage.vrfy4)
  	// v[3] = document.getElementById("v3").value;
  	// console.log(v[3])
  }
  if(v1.value && v2.value && v3.value &&v4.value !=""){
  	// document.getElementById('v5').focus()
    localStorage.vrfy4 = document.getElementById("v4").value;
    console.log(localStorage.vrfy4)
  	// v[4] = document.getElementById("v4").value;
  	// console.log(v[4])
    if(is_correspond(localStorage)){
            document.location.href="index.html";  
  }
  /******* vertify 有一個要求，再輸入四位數密碼時，必須要再按一個任意鍵 
  才能使 v1.value && v2.value && v3.value &&v4.value !=""
  成立  *********/
  else{
    document.getElementById('v1').focus();
    document.getElementById("v1").value="";
    document.getElementById("v2").value="";
    document.getElementById("v3").value="";
    document.getElementById("v4").value="";
  }
  }
 }

var is_correspond = function is_correspond(localStorage){
	return localStorage.code1==localStorage.vrfy1 && localStorage.code2==localStorage.vrfy2 
	&& localStorage.code3==localStorage.vrfy3 && localStorage.code4==localStorage.vrfy4 ;
 }
exports.setPassword = setPassword;
exports.showPassword = showPassword;
exports.vertify = vertify;
exports.is_correspond = is_correspond;
