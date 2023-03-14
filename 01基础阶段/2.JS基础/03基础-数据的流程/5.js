/* 
1. 输出一个对象的所有键值对
*/

var obj = {
    a: 1,
    b: 2,
    c: '123'
}
for(var key in obj){
    console.log(key + "=" + obj[key])
}

/* 
2. 计算对象中字符串属性的数量
*/
var obj1 = {
    a: 1,
    b: 2,
    c: '123',
    d: '12334'
}
var count = 0;
for(var key in obj1){
    if(typeof obj1[key] === 'string'){
        count++;
    }
}
console.log(count);


/* 
3. 将一个对象所有的数字属性，转换为字符串，并在其前面加上￥
例如：
{
    name:"xxx",
    balance: 199.8, //余额
    taken: 3000 //消费
}
-->
{
    name:"xxx",
    balance: '￥199.8', //余额
    taken: '￥3000' //消费
}
*/
var obj2 = {
    name:"xxx",
    balance: '￥199.8', //余额
    taken: '￥3000' //消费
}
for(var key in obj2){
    if(typeof obj2[key] === 'number') {
        obj2[key] = "￥" + obj2[key];
    }
}

console.log(obj2);

/* 
4. 按照下面的要求进行转换
[1, 2, 3]  
-->
[
    {number:1, doubleNumber: 2},
    {number:2, doubleNumber: 4},
    {number:3, doubleNumber: 6},
]
*/
var arr = [1, 2, 3] ;
var newArr = [];
for(key in arr){
    newArr.push({number: arr[key],doubleNumber: arr[key]*2});
}
console.log(newArr);