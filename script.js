var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");

// console.log(body);
// console.log(color1);
// console.log(color2);
// console.log(h3);

function setBackgroundGradient() {
	body.style.background="linear-gradient(to right, "
					+ color1.value
					+ ","
					+ color2.value
					+ ")";
	h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackgroundGradient);
color2.addEventListener("input", setBackgroundGradient);

