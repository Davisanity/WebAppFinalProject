window.addEventListener('deviceorientation', function(event) {
    // var x = event.alpha;
    // var y = event.beta;
    var z = event.gamma ;

  	if (z>7||z<-5){
  		
  		document.location.href="password.html";  
  	}
  });