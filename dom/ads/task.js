'use strict'

window.onload = function() {
	let active = 0;
	let arrRotators = Array.from(document.querySelectorAll('.rotator'));
	let timer = function() {
		for (let i = 0; i < arrRotators.length; i++) {
			var arrCase = Array.from(arrRotators[i].querySelectorAll('.rotator__case'));
			for (let j = 0; j < arrCase.length; j++) {
				if (j == active) {
					arrCase[j].classList.add('rotator__case_active');
				} else {
					arrCase[j].classList.remove('rotator__case_active');
				}
			}	
		}
		active++;
		if (active == arrCase.length - 1) {
			active = 0;
		}
	};

setInterval (timer, 1000);
}