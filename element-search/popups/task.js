'use strict'

window.onload = function() {
	document.getElementById('modal_main').className = 'modal modal_active';
	document.getElementsByClassName('show-success')[0].onclick = function() {
		document.getElementById('modal_main').className = 'modal';
		document.getElementById('modal_success').className = 'modal modal_active';
	};

	let arr = Array.from(document.getElementsByClassName('modal__close'));
	for (let i = 0; i < arr.length; i++) {
		arr[i].onclick = function(){
			document.getElementsByClassName('modal_active')[0].className = 'modal';
		};
	}
}