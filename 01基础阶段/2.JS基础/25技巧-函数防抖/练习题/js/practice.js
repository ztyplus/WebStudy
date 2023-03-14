// 当窗口尺寸变化后，调用layout函数

function debounce(fn, delay) {
  var timerId;
  return function () {
    var args = Array.prototype.slice.call(arguments);
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

window.addEventListener("resize", debounce(layout, 100));
