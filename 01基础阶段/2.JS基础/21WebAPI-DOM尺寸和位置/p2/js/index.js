// 让小球向右下运动，遇到边缘后反弹

// 每隔20ms，改变小球的left与top
var ball = document.querySelector(".ball");
var disX = 50;
var disY = 50;

var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;

var ew = ball.offsetWidth;
var eh = ball.offsetHeight;

var maxLeft = w - ew;
var maxTop = h - eh;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 随机改变背景颜色
function changeBg() {
  var r = getRandom(0, 255);
  var g = getRandom(0, 255);
  var b = getRandom(0, 255);
  ball.style.background = "rgb(" + r + "," + g + "," + b + ")";
}

// 每隔20ms，改变小球的left与top
setInterval(function () {
  var reat = ball.getBoundingClientRect();
  var x = reat.left;
  var y = reat.top;

  var left = x + disX;
  var top = y + disY;

  if (left > maxLeft) {
    left = maxLeft;
    disX = -disX;
    changeBg();
  }

  if (left < 0) {
    left = 0;
    disX = -disX;
    changeBg();
  }

  if (top < 0) {
    top = 0;
    disY = -disY;
    changeBg();
  }

  if (top > maxTop) {
    top = maxTop;
    disY = -disY;
    changeBg();
  }

  ball.style.left = left + "px";
  ball.style.top = top + "px";
}, 20);
