// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上

/**
 * 为英雄创建对象元素
 * @param {*} h
 */
function createHeeros(h) {
  var a = document.createElement("a");
  a.href = "https://pvp.qq.com/web201605/herodetail/" + h.ename + "./shtml";
  a.target = "_blank";
  a.className = "item";
  var img = document.createElement("img");
  img.src =
    "https://game.gtimg.cn/images/yxzj/img201606/heroimg/" +
    h.ename +
    "/" +
    h.ename +
    ".jpg";
  var span = document.createElement("span");

  span.innerHTML = h.cname;
  a.appendChild(img);
  a.appendChild(span);
  document.querySelector(".container").appendChild(a);
}

for (var i = 0; i < heros.length; i++) {
  createHeeros(heros[i]);
}
