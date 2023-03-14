// 生成一个a-z的字符串
var str = "";
for (var i = 97; i <= 122; i++) {
  var s = String.fromCharCode(i);
  str += s;
}
console.log(str);