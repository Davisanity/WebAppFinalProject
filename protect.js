window.addEventListener('deviceorientation', function (event) {
    // var x = event.alpha;
    // var y = event.beta;
    var z = event.gamma ;

  	if (z>7||z<-5){
  		document.location.href="password.html";  
  	}
  });



// 'use strict';
// (function(exports){
// 	var Protect = function(event){
// 	// var x = event.alpha;
//     // var y = event.beta;
//     var z = event.gamma ;
// 	};
// 	Protect.prototype = {
// 		change()
// 		{
// 			if (z>7||z<-5){
//   				document.location.href="password.html";
//   				console.log("change");
//   			}
// 		}
// 	}
// 	exports.Protect=new Protect();
// })(window);
// window.addEventListener('deviceorientation',function(){
// 	console.log("need password");
// });













