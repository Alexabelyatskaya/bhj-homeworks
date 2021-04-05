'use strict'

window.onload = function() {
	let arr = Array.from(document.querySelectorAll('.font-size'));
	for (let element of arr) {
		element.onclick = function() {
			event.currentTarget.classList.add('font-size_active');
			if (event.currentTarget.dataset.size) {
				let newClassName = 'book book_fs-' + event.currentTarget.dataset.size;
				document.querySelector('#book').className = newClassName;
			} else {
				document.querySelector('#book').className = 'book';
			}
			for (let el of arr) {
				if (event.currentTarget !== el) {
					el.classList.remove('font-size_active');
				}
			}
			return false;
		};
	}
}

// В этом решении мы исходим из необходимости соотнести атрибут data-size с именем класса, 
// что потребует координации с версткой css.