'use strict'

window.onload = function() {
	let arr = Array.from(document.getElementsByClassName('menu__item'));
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].querySelector('.menu_sub')) {
			arr[i].onclick = function() {
				if (arr[i].querySelector('.menu_active')) {
					arr[i].querySelector('.menu_sub').className = ('menu menu_sub');
				} else {
					arr[i].querySelector('.menu_sub').className = ('menu menu_sub menu_active');
					}
				return false;
			};	
		}
	}
};