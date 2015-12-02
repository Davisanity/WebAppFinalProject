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
        console.log("out")
      	document.getElementById('b1').src ="guard.png"
   		}
	};
  exports.Start= Start;//func.
})(window);
window.addEventListener("load", function() {
  console.log("Hello World!");
});

