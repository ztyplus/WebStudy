// 选择图片容器
var imgs = document.querySelector("#imgs");

// 选择侧边导航栏容器
var sideBar = document.querySelector("#side-bar");

// 存储创建的图片元素
var imgDom = [];

// 存储创建的导航元素
var navDom = [];

// 记录当前活跃的图片和导航
var activeImg = null;
var activeNav = null;

// 根据data数组生成图片及侧边栏
for (var i = 0; i < data.length; i++) {
  var item = data[i];

  // 创建图片
  var tagA = document.createElement("a");
  tagA.href = "#";
  tagA.style.backgroundColor = item.bg;
  tagA.style.backgroundImage = "url(" + item.img + ")";
  imgs.appendChild(tagA);
  imgDom.push(tagA);

  // 创建导航
  var tagNav = document.createElement("a");
  tagNav.className = "nav";
  tagNav.href = "#";
  tagNav.title = item.title + ":" + item.desc;
  tagNav.innerHTML = "<span>" + item.title + "</span>" + item.desc;
  sideBar.appendChild(tagNav);
  navDom.push(tagNav);

  // 初始化
  if (i === 0) {
    tagA.className = "active";
    tagNav.className = "nav active";
    activeImg = tagA;
    activeNav = tagNav;
  }

  tagNav.onmouseenter = (function (tagA, tagNav) {
    return function () {
      clearInterval(t);
      // 1. 把原来活跃的图片和导航取消
      activeNav.className = "nav";
      activeImg.className = "";

      // 2. 把当前鼠标覆盖的导航和图片展示
      tagA.className = "active";
      tagNav.className = "nav active";

      // 3. 记录最新的导航和图片
      activeImg = tagA;
      activeNav = tagNav;
    };
  })(tagA, tagNav);

  tagNav.onmouseleave = function () {
    t = setInterval(move, 2000);
  };
}

function move() {
  // 1. 把原来活跃的图片和导航取消
  activeNav.className = "nav";
  activeImg.className = "";

  // 2. 找到当前元素下一个
  var index = imgDom.indexOf(activeImg);
  if (index === data.length - 1) {
    activeNav = navDom[0];
    activeImg = imgDom[0];
  } else {
    activeNav = navDom[index + 1];
    activeImg = imgDom[index + 1];
  }
  // 3. 激活
  activeImg.className = "active";
  activeNav.className = "nav active";
}

// 自动轮播
var t = setInterval(move, 2000);
