'use strict';
(function(exports){
	var Start = function(){
	};
	Start.prototype = {
		mouseOver()
    	{
    		document.getElementById('b1').src ="guard_press.png"
    		console.log("mouse")
    	},
    	mouseOut()
    	{
      	document.getElementById('b1').src ="guard.png"
   		}
	};
  }
  exports.Start=new Start();
})(window);
window.addEventListener("load", function() {
  console.log("Hello World!");
});

