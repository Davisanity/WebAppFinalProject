// window.addEventListener('onkeydown', function(event) {
var c = []
var v = []
function setPassword()
{
  // array code;
  // document.getElementById('bi').focus()

  if(b1.value!=""){
  	// document.getElementById('bi').blur()
  	document.getElementById('b2').focus()
  	c[1] = document.getElementById("b1").value;
  	console.log(c[1])
  }
  if(b1.value && b2.value!=""){
  	// document.getElementById('b2').blur()
  	document.getElementById('b3').focus()
  	c[2] = document.getElementById("b2").value;
  	console.log(c[2])
  }
  if(b1.value && b2.value && b3.value !=""){
  	// document.getElementById('b3').blur()
  	document.getElementById('b4').focus()
  	c[3] = document.getElementById("b3").value;
  	console.log(c[3])
  }
  if(b1.value && b2.value && b3.value &&b4.value !=""){
  	document.getElementById('b5').focus()
  	c[4] = document.getElementById("b4").value;
  	console.log(c[4])
  }
 }

 function showPassword()
 {
 	for( i=1 ; i<5;i++){
  		console.log(c[i])
  	}

 }
 function vertify()
 {
 	if(v1.value!=""){
  	// document.getElementById('bi').blur()
  	document.getElementById('v2').focus()
  	v[1] = document.getElementById("v1").value;
  	console.log(v[1])
  }
  if(v1.value && v2.value!=""){
  	// document.getElementById('b2').blur()
  	document.getElementById('v3').focus()
  	v[2] = document.getElementById("v2").value;
  	console.log(v[2])
  }
  if(v1.value && v2.value && v3.value !=""){
  	// document.getElementById('b3').blur()
  	document.getElementById('v4').focus()
  	v[3] = document.getElementById("v3").value;
  	console.log(v[3])
  }
  if(v1.value && v2.value && v3.value &&v4.value !=""){
  	document.getElementById('v5').focus()
  	v[4] = document.getElementById("v4").value;
  	console.log(v[4])
  	for( i=1 ; i<5;i++){
  		console.log(c[i])
  	}
  }
 }
 function check(){
 	for( i=1 ; i<5;i++){
  		if(c[i]==v[i]){
  			document.location.href="index.html";  
  		}
  		// else{
  		// // for( i=1 ; i<5;i++){
  		// // }
  		// document.getElementById('v1').focus()		
  		// }
  	}
  	
 }
// function loseFocus()
//   {
//   document.getElementById('txt1').blur()
//   }
// <!-- 若<form>屬性name值為reg裡的文字方塊值為空字串，則顯示「未輸入姓名」 -->
//                 if(reg.username.value == "") 
//                 {
//                         alert("未輸入姓名");
//                 }