const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// 遍历对象的所有属性名
const res1 = Object.keys(obj);
console.log(res1);

// 遍历对象的所有属性值
const res2 = Object.values(obj);
console.log(res2);

// 遍历对象的所有属性名和属性值
const res3 = Object.entries(obj);
console.log(res3);

// 复制obj的所有属性到一个新的对象
const newObj = {
  ...obj,
};

console.log(newObj);
