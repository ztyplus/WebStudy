// var a = 3; // 避免污染
// var b = 4; // 避免污染

// 使用 1.js 暴露的函数和变量
(function(){
    var a = 3; 
    var b = 4;
    console.log(func.count);
    func.sayHi();
})();