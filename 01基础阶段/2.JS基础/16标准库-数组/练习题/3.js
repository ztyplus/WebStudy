// 数组去重
var nums = [1, 1, '1', 'a', 'b', 'a', 3, 5, 3, 7];

for (var i = 0; i < nums.length; i++) {
  var item = nums[i];
  for (var j = i + 1; j < nums.length; j++) {
    if (item === nums[j]) {
      nums.splice(j, 1);
      j--;
    }
  }
}

console.log(nums);