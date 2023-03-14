// 创建一个没有隐式原型的用户对象，随意添加一些属性

var user = Object.create(null);

var user1 = {
  username: "张三",
};
Object.setPrototypeOf(user, null);
