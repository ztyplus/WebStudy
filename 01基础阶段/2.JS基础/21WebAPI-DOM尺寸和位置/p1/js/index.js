// 让便签可被拖动，但不能超出视口

var moveBar = document.querySelector(".move-bar");
var note = document.querySelector(".note");

moveBar.onmousedown = function (e) {
  var x = e.clientX;
  var y = e.clientY;

  var reat = moveBar.getBoundingClientRect();
  var ex = reat.left;
  var ey = reat.top;

  // 获取饰扣宽高与元素宽高
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  var ew = note.offsetWidth;
  var eh = note.offsetHeight;

  // 算出最大的left与top
  var maxLeft = w - ew;
  var maxTop = h - eh;

  // 鼠标按下
  window.onmousemove = function (e) {
    console.log("鼠标在移动");
    var disX = e.clientX - x;
    var disY = e.clientY - y;

    var left = disX + ex;
    var top = disY + ey;

    if (left < 0) {
      left = 0;
    }
    if (left >= maxLeft) {
      left = maxLeft;
    }
    if (top < 0) {
      top = 0;
    }
    if (top >= maxTop) {
      top = maxTop;
    }

    note.style.left = left + "px";
    note.style.top = top + "px";
  };

  // 鼠标抬起
  window.onmouseup = function () {
    console.log("鼠标抬起");
    window.onmousemove = null;
    window.onmouseup = null;
  };
};
