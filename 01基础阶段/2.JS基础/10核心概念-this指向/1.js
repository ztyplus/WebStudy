var person = {
  name: "monica",
  age: 17,
  sayHi: function () {
    // 完成该方法，打印姓名和年龄
    console.log(this.name, this.age);
  },
};

var p1 = person;
p1.sayHi();
