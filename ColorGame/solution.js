var numSquares = 9;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy")
			numSquares = 3;
		else if (this.textContent === "Medium") 
			numSquares = 6;
		else if (this.textContent === "Hard")  
			numSquares = 9;
		reset();
	});
}


function reset() {
	//reset button to new game
	resetButton.textContent = "New Colors";
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change colors of square
	for (var i = 0; i < squares.length; i++) {
		//add initial colors to square
		if (colors[i]) {
			squares[i].style.background = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.background = "none";
		}
	}
	//reset h1 color
	h1.style.background = "steelblue";
	//reset the message
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to square
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//compare color to pickedColor
		if(this.style.background === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColor(this.style.background);
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	for (var i = 0; i < numSquares; i++) {
		squares[i].style.background = color;
	}
	h1.style.background = color;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}