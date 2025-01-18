//https://www.youtube.com/watch?v=g2o22C3CRfU
let getWwPercentage, getWhPercentage;
let itemArr = [];
let sorted = true;
let solveInterval;
document.querySelector('#isSortedElem').innerHTML = sorted;


function setup() {
  createCanvas(windowWidth/100*79.2, windowHeight);

  getWwPercentage = function (num) {
    return windowWidth/100*num;
  }

  getWhPercentage = function (num) {
    return windowHeight/100*num;
  }

  for (var i = 0; i < 100; i++) {
    var num = -getWhPercentage(i) - getWhPercentage(1);
    itemArr.push(num);
  }
}

function draw() {
  background(0);
  noStroke();

  drawSort();
}

function drawSort() {
  for (var i = 0; i < getWwPercentage(100); i++) {
    //ill work this out
    rect(i*getWwPercentage(0.79), windowHeight, getWwPercentage(0.79), itemArr[i]);
  }
}

function desort() {
  let currentIndex = itemArr.length;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [itemArr[currentIndex], itemArr[randomIndex]] = [
      itemArr[randomIndex], itemArr[currentIndex]];
  }
  clear();
  background(0);
  sorted = false;
  document.querySelector('#isSortedElem').innerHTML = sorted;
  drawSort();
}

function sortCanvas() {
  var sortTypeSelectE = document.querySelector('#sort-select');
  var value = sortTypeSelectE.value;
  document.querySelector('#sortbutton').disabled = true;

  var sortednum = 0;
  if (value == 'linear' && !sorted) {
      solveInterval = setInterval(() => {
        for (var i = 0; i < 100;) {
          if (i === 99) {
            sorted = true;
            document.querySelector('#sortbutton').disabled = false;
            clearInterval(solveInterval);
          }
          if (-itemArr[i] < -itemArr[i+1]) {
            i++;
          } else {
            break;
          }
        }
        for (var i = 0; i < 100; i++) {
          if (-itemArr[i] > -itemArr[i+1]) {
            [itemArr[i], itemArr[i+1]] = [
              itemArr[i+1], itemArr[i]];
          }
        }

        clear();
        background(0);
        document.querySelector('#isSortedElem').innerHTML = sorted;
        drawSort();
      }, 50);
  } else {
    console.log('wip');
  }
}