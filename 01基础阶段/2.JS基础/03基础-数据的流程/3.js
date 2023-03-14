/* 
1. 1~100求和
*/

var sum = 0;
for(i = 1; i <= 100; i++){
  sum += i;
}
console.log(sum);

/* 
2. 求某个数的阶乘
*/

var num = 5;
var result = 1;
for(i = 1; i <= num; i++){
  result *= i;
}
console.log(result);

/* 
3. 数组求和
*/

var arr = [1,2,3,56,87,9];
var sum1 = 0;
for(i = 0; i < arr.length; i++){
  sum1 += arr[i];
}
console.log(sum1);

/* 
4. 求数组中的奇数的个数
*/

var sum2 = 0;
for(i = 0; i < arr.length; i++){
  arr[i] % 2 !== 0 && (sum2++);
}
console.log(sum2);

/* 
5. 求数组中的奇数和
*/

var sum3 = 0;
for(i = 0; i < arr.length; i++){
  arr[i] % 2 !== 0 && (sum3 += arr[i]);
}
console.log(sum3);