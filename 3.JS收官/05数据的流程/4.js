/* 
1. 数组中是否存在某个数，输出 是 或 否
*/
var find = false;
var targrt = 980;
var arr = [1, 3, 6, 34, 98, 234, 12];
// console.log(1 in arr);
for(i = 0; i < arr.length; i++){
  if(arr[i] === targrt) {
    find = true;
    break;
  }
}
console.log(find ? "是" : "否");

/* 
2. 数组中是否存在某个数，如果存在，则输出它所在的下标，如果不存在，则输出-1
*/

var index = -1;
for(i = 0; i < arr.length; i++){
  if(arr[i] === targrt) {
    index = i;
    break;
  }
}

console.log(index);


/* 
3. 找到数组中第一个奇数和最后一个奇数，将它们求和
*/
var arr = [1, 3, 6, 34, 98, 234, 12];


var sum = 0;
var index1 = 0;
for(i = 0; i < arr.length; i++){
  if(arr[i] % 2 !== 0){
    sum += arr[i];
    index1 = i;
    break;
  }
}
for(i = arr.length - 1; i >= 0 ; i--){
  if(arr[i] % 2 !== 0 && i !== index){
    sum += arr[i];
    break;
  }
}
console.log(sum)

/* 
4. 有两个数组，看两个数组中是否都存在奇数，输出 是 或 否
*/

var isFind1 = false;
var isFind2 = false;
var nums1 = [1,2,3,4,5];
var nums2 = [2,4,6,99];

for(i = 0; i < nums1.length; i++){
  if(nums1[i] % 2 !== 0) {
    isFind1 = true;
    break;
  }
}
for(i = 0; i < nums2.length; i++){
  if(nums2[i] % 2 !== 0) {
    isFind2 = true;
    break;
  }
}

console.log(isFind1 && isFind2 ? "是" : "否");