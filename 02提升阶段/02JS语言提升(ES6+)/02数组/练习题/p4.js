// 得到一个随机数组成的数组，数组长度为10
// 结果类似于：[0.262, 0.167, 0.841, ...]

const arr = Array(10)
  .fill(0)
  .map(function () {
    return Math.random();
  });

console.log(arr);
