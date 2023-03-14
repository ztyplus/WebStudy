(function () {
  // 初始化
  var list = document.querySelector(".list");

  // 1. 将列表中第一个元素克隆到列表最后一个
  function cloneFirstItem() {
    var firstItem = list.children[0];
    var newItem = firstItem.cloneNode(true);
    list.appendChild(newItem);
  }

  cloneFirstItem();

  // 2. 列表每隔一段时间，滚动到下一个位置
  var duration = 2000;
  setInterval(moveNext, duration);

  // 将列表滚动到下一个位置
  var itemHeight = 30;
  var curIndex = 0;
  function moveNext() {
    var from = curIndex * itemHeight;
    curIndex++;
    var to = curIndex * itemHeight;
    var totalDuration = 500;
    var duration = 15; //动画间隔时间
    var times = totalDuration / duration; //变化次数
    var dis = (to - from) / times;
    var timer = setInterval(function () {
      from += dis;
      if (from >= to) {
        // 到达目标值，结束
        clearInterval(timer);
        // 滚动完成后，如果是最后一项
        if (curIndex === list.children.length - 1) {
          curIndex = 0;
          from = 0;
        }
      }
      list.scrollTop = from;
    }, duration);
  }
})();
