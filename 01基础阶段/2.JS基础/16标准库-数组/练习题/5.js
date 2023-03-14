// 将下面的伪数组转换为真数组
var fakeArr = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};


var arr = Array.prototype.slice.call(fakeArr);
// var arr = [].slice.call(obj);

console.log(arr instanceof Array);