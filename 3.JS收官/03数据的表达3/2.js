/* 
邓哥，81岁，爱好香菜、秋葵、遛鸟
成哥，30岁，爱好扯淡、找邓嫂
monica，17岁，爱好奶茶、唱歌

用字面量描述上面的信息

思考：
1. 如何得到平均年龄
2. 如何得到所有人所有爱好的总数
*/

var arr = [
  { name: "邓哥", age: 81, loves: ['香菜', '秋葵', '遛鸟']},
  { name: "成哥", age: 30, loves: ['扯淡', '找邓嫂']},
  { name: "莫妮卡", age: 17, loves: ['喝茶', '唱歌']}
];

var avarage_age = (arr[0].age + arr[1].age + arr[2].age ) / 3
var love_num = arr[0].loves.length + arr[2].loves.length + arr[1].loves.length


console.log(avarage_age, love_num);