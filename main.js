'use strict';   //用了嚴格模式

document.addEventListener('DOMContentLoaded', function(event) {
	console.log(Start.mouseOver);
	window.start = new Start();//不用var 想要全欲 就要windows.
    window.start.mouseOver();
    window.start.mouseOut();  
});

// document.addEventListener('deviceorientation', function(event) {
// 	var protect = new Protect();
//     protect.change();
// });
