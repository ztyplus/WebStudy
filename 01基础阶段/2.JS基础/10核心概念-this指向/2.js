// 为所有对象添加方法print，打印对象的键值对

Object.prototype.print = function () {
  for (var key in this) {
    this.hasOwnProperty(key) && console.log(key, this[key]);
  }
};

var obj1 = {
  a: 1,
  b: 2,
};

var obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

obj2.print();
