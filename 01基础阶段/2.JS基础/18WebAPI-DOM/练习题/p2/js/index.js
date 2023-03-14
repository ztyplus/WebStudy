// 每隔一段时间，切换英雄的图片，让英雄动起来

var img = document.querySelector("img");
var curIndex = 1;

setInterval(function () {
  curIndex++;
  img.src = "./img/" + curIndex + ".png";
  if (curIndex === 4) {
    curIndex = 1;
  }
}, 100);

var x = 0;
setInterval(function () {
  x++;
  img.style.left = x + "px";
}, 10);

// 每隔一段时间，改变英雄的位置，让英雄向右移动
