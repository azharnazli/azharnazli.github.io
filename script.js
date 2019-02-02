var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = (document.getElementById(
  "colorDisplay"
).textContent = pickedColor);
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function() {
  messageDisplay.innerText = "";
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.innerText = "Benar!";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Main Lagi?";
    } else {
      this.style.backgroundColor = "rgb(35, 35, 35)";
      messageDisplay.textContent = "Coba Lagi";
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}
