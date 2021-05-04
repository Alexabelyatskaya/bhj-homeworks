'use strict'

let removerOnClick = function() {
	event.currentTarget.parentNode.remove();
	console.log(1);
};
window.onload = function() {
	document.querySelector('#task__input').value = '';
	document.querySelector('#tasks__add').onclick = function() {
		if (document.querySelector('#task__input').value.length == 0) {
			return false;
		}	
		let container = document.createElement('div');
		container.classList.add('task');

		let discription = document.createElement('div');
		discription.classList.add('task__title');
		discription.innerHTML = document.querySelector('#task__input').value;

		let remover = document.createElement('a');			
		container.appendChild(discription);
		container.appendChild(remover);

		document.querySelector('#tasks__list').appendChild(container);
		remover.outerHTML = '<a onclick="removerOnClick()" href="#" class="task__remove">&times;</a>';
		document.querySelector('#task__input').value = '';

		return false;
	};
}