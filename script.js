var tri;
var counter = 0;
var clickVal = 'top';
var randomColor;
var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f2c820', '#e67e22', '#e74c3c', '#95a5a6', '#2c3e50'];

function flip() {
	tri = $('.triangle');
	randomColor = colors[Math.floor(Math.random() * colors.length)];
	if (clickVal === 'top') {
		for (var i = 0; i < 200; i++) {
			counter ++;
			$(tri[i]).css('border-top-color', randomColor);
			$(tri[i]).css('transform', 'rotateY(-180deg)');
			$(tri[i]).css('transition-delay', counter/20 + 's');
			$(tri[i]).css('-webkit-transition-delay', counter/20 + 's');
		}
		counter = 0;
		clickVal = 'bottom';
	} else if (clickVal === 'bottom') {
		for (var i = 0; i < 200; i++) {
			counter ++;
			$(tri[i]).css('border-top-color', randomColor);
			$(tri[i]).css('transform', 'rotateY(-360deg)');
			$(tri[i]).css('transition-delay', counter/20 + 's');
			$(tri[i]).css('-webkit-transition-delay', counter/20 + 's');
		}
		counter = 0;
		clickVal = 'top';
	}
}

function timed(){
	window.setInterval(flip, 11000);
}

$(document).ready(function(){
	for (var i = 0; i < 198; i++){
		$('body').append('<div class="one"><div class="triangle top"></div></div>');
	};
	timed();
})

$(window).load(function(){
	flip();
})
