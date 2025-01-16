
let getWwPercentage, getWhPercentage;
let itemArr = [];

function setup() {
  createCanvas(windowWidth/100*79.2, windowHeight);

  getWwPercentage = function (num) {
    return windowWidth/100*num;
  }

  getWhPercentage = function (num) {
    return windowHeight/100*num;
  }


  for (var i = 0; i < getWhPercentage(100); i++) {
    var num = random(-150, 0);
    itemArr.push(num);
  }
}

function draw() {
  background(0);
  noStroke();

  //rect(0, windowHeight, 5, -150);

  for (var i = 0; i < getWwPercentage(100); i++) {
    rect(i*5, windowHeight, 5, itemArr[i]);
  }
}
