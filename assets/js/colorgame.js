var numOfSquares = 6;
var colorList = generatorRandomColor(6);
var squareList = document.querySelectorAll(".square");
var goal = document.querySelector("h1");
var targetSquare = Math.floor(Math.random() * numOfSquares)
var targetColor = colorList[targetSquare];
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");
var message = document.querySelector("#display");

init();

function init() {
  setupMode();
  setupSquares();
  reset();
}

function setupSquares() {
  for (var n = 0; n < 9; n++) {
    squareList[n].style.display = "block";
  }
  if (numOfSquares < 9) {
    for (var m = numOfSquares; m < 9; m++) {
      squareList[m].style.display = "none";
    }
  }
  for (var j = 0; j < numOfSquares; j++) {
    squareList[j].style.backgroundColor = colorList[j];
    targetSquare = Math.floor(Math.random() * numOfSquares)
    targetColor = colorList[targetSquare];
    goal.textContent = targetColor;
    squareList[j].addEventListener("click", function() {
      var clickColor = this.style.backgroundColor;
      if (clickColor === targetColor) {
        message.textContent = "Congrat! Correct!";
        changeColors(targetColor);
        resetButton.textContent = "Play again?";
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "uncorrect, try again!";
      }
    });
  }
}

function changeColors(c) {
  for (var i = 0; i < numOfSquares; i++) {
    squareList[i].style.backgroundColor = c;
  }
  document.querySelector("div").style.backgroundColor = targetColor;
}

function setupMode() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numOfSquares = 3;
      } else if (this.textContent === "Medium") {
        numOfSquares = 6;
      } else {
        numOfSquares = 9;
      }
      reset();
    });
  }
}

function generatorRandomColor(num) {
  var list = [];
  for (var n = 0; n < numOfSquares; n++) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    list.push("rgb(" + r + ", " + g + ", " + b + ")");
  }
  return list;
}

function reset() {
    colorList = generatorRandomColor(numOfSquares);
    setupSquares();
    document.querySelector("#panel").style.backgroundColor = "steelblue";
    resetButton.textContent = "New Color";
    message.textContent = "";
}

resetButton.addEventListener("click", function() {
  reset();
});

// var easyButton = document.querySelector("#easy");
// easyButton.addEventListener("click", function(){
//   numOfSquares = 3;
//   colorList = generatorRandomColor(numOfSquares);
//   easyButton.classList.add("selected");
//   mediumButton.classList.remove("selected");
//   crazyButton.classList.remove("selected");
//   setupSquares();
//   for(var i = 3; i < 9; i++){
//   squareList[i].style.display = "none";
//   document.querySelector("#panel").style.backgroundColor = "steelblue";
// }
// });
// var mediumButton = document.querySelector("#medium");
// mediumButton.addEventListener("click", function(){
//   numOfSquares = 6;
//   colorList = generatorRandomColor(numOfSquares);
//   mediumButton.classList.add("selected");
//   easyButton.classList.remove("selected");
//   crazyButton.classList.remove("selected");
//   setupSquares();
//   document.querySelector("#panel").style.backgroundColor = "steelblue";
//   for(var i = 0; i < 9; i++){
//     if(i < 6) {
//     squareList[i].style.display = "block"; }
//     else squareList[i].style.display = "none";
//   }
// });
// var crazyButton = document.querySelector("#crazy");
// crazyButton.addEventListener("click", function(){
//   numOfSquares = 9;
//   colorList = generatorRandomColor(numOfSquares);
//   mediumButton.classList.remove("selected");
//   easyButton.classList.remove("selected");
//   crazyButton.classList.add("selected");
//   setupSquares();
//   document.querySelector("#panel").style.backgroundColor = "steelblue";
//   for(var i = 3; i < 9; i++){
//     squareList[i].style.display = "block";
//
//   }
// });
