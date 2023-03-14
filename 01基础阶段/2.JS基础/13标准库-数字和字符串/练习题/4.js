// 将下面的rgb格式转换成为HEX格式
var rgb = 'rgb(253, 183, 25)';

var arr = rgb.replace("rgb(", "").replace(")", "").split(",");

var result = "#";
for (var i = 0; i < 3; i++) {
  result += parseInt(arr[i]).toString(16);
}

console.log(result);
