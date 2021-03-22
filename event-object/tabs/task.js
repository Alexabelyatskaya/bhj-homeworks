window.onload = function() {
	let arrMenu = Array.from(document.querySelectorAll('.tab'));
	let arrTab = Array.from(document.querySelectorAll('.tab__content'));
	for (let i = 0; i < arrMenu.length; i++) {
		arrMenu[i].onclick = function(event) {
			for (let j = 0; j < arrMenu.length; j++) {
				if (arrMenu.indexOf(event.currentTarget) == j) {
					arrMenu[j].classList.add('tab_active');
					arrTab[j].classList.add('tab__content_active');
				} else {
					arrMenu[j].classList.remove('tab_active');
					arrTab[j].classList.remove('tab__content_active');
				}
			}	
			return false;				
		};
	}
};