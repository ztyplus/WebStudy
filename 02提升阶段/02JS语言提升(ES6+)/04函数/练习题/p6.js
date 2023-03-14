// 根据下面的调用示例，编写User类

// function User(name, password) {
//   this.name = name;
//   this.password = password;
// }

// User.prototype.sayHello = function () {
//   console.log(`账号 —— ${this.name}，密码 —— ${this.password}`);
// };

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  sayHello() {
    console.log(`账号 —— ${this.name}，密码 —— ${this.password}`);
  }
}

const u = new User("account", "pwd123"); // 创建用户
u.sayHello(); // 输出：账号 —— account，密码 —— pwd123
