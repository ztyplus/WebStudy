var arr1 = [1, 2, 3, 4]; // 真数组
// 类数组(伪数组)
var arr2 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};

console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);

// 判断arr1和arr2是否是真数组
