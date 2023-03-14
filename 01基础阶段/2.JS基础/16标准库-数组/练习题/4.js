// 判断下面的文件是否符合后缀名要求
// 合法的后缀名：.jpg  .gif  .bmp .webp  .png

var filename = 'd://files/mymap/3.jpg';

var index = filename.lastIndexOf(".");
var extname = filename.substring(index);

var allows = [".jpg", "gif", ".bmp", "png"];

if (allows.includes(extname)) {
  console.log("合法");
} else {
  console.log("不合法");
}