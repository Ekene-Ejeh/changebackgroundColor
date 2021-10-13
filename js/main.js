// alert("Hello!");
const colorBtn = document.querySelector(".color-btn");
const bodyElement = document.querySelector("body");
const colors = ["yellow", "red", "green", "#3b5998"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
	// bodyElement.style.backgroundColor = colors[3];
	let random = Math.floor(Math.random() * colors.length);
	bodyElement.style.backgroundColor = colors[random];
}
