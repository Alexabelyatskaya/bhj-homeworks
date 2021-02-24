'user script'

// Задание 2

const cookie = document.getElementById("cookie");
function changeSizes() {
	const clicker__counter = document.getElementById("clicker__counter");
	let counter = parseInt(clicker__counter.textContent);
	clicker__counter.textContent = counter + 1;
	if (counter %2 == 0) {
		cookie.width += 50;
	} else cookie.width -= 50;
};
cookie.onclick = changeSizes;