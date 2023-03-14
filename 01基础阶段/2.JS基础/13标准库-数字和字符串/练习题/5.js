// name转换成驼峰命名
var name = 'has own property'; // --> hasOwnProperty

var arr = name.split(" ");
var result = "";
for (var i = 0; i < arr.length; i++) {
  var s = arr[i];
  if (i > 0) {
    s = s[0].toUpperCase() + s.substring(1);
  }
  result += s;
}

console.log(result);