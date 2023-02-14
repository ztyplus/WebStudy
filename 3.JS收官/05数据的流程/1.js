/* 
1. 输出100个hello world
*/
for(i=0;i<100;i++){
  console.log("hello world");
}


/* 
2. 输出100~200
*/

for(i = 100; i <= 200; i++){
  console.log(i);
}

/* 
3. 创建一个包含1~100的数组
*/
var arr = [];
for(i = 1; i <= 100; i++){
  // arr[i] = i;
  arr.push(i)
}
console.log(arr);

/* 
4. 定义一个数组，遍历输出它的每一项
*/

var arr1 = [1,2,'3',false,true,'hhh']

for(i = 0; i < arr1.length; i++){
  console.log(arr1[i]);
}