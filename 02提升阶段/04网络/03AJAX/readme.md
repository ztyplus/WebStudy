# AJAX

>  AJAX就是浏览器赋予JS的一套API，通过这套API能够使JS具备网络通信的能力

## 历史

浏览器本身就具备网络通信的能力，但在早期，浏览器并没有把这个能力开放给JS。

最早是微软在IE浏览器中把这一能力向JS开放，让JS可以在代码中实现发送请求，这项技术在2005年被正式命名为AJAX（**A**synchronous **J**avascript **A**nd **X**ML）

IE使用了一套API来完成请求的发送，这套API主要依靠一个构造函数完成。该构造函数的名称为`XMLHttpRequest`，简称为`XHR`，所以这套API又称之为`XHR API`

由于`XHR API`有着诸多缺陷，在HTML5和ES6发布之后，产生了一套更完善的API来发送请求。这套API主要使用的是一个叫做`fetch`的函数，因此这套API又称之为`Fetch API`

**无论是`XHR`还是`Fetch`，它们都是实现ajax的技术手段，只是API不同。**

## XHR API

```js
var xhr = new XMLHttpRequest(); //创建发送请求的对象
xhr.onreadystatechange = function(){ //当请求状态发生改变时运行的函数
    // xhr.readyState： 一个数字，用于判断请求到了哪个阶段
    // 0: 刚刚创建好了请求对象，但还未配置请求（未调用open方法）
    // 1: open方法已被调用
    // 2: send方法已被调用
    // 3: 正在接收服务器的响应消息体
    // 4: 服务器响应的所有内容均已接收完毕
    
    // xhr.responseText： 获取服务器响应的消息体文本

    // xhr.getResponseHeader("Content-Type") 获取响应头Content-Type
}
xhr.open("请求方法", "url地址"); //配置请求
xhr.setRequestHeader("Content-Type", "application/json"); //设置请求头
xhr.send("请求体内容"); //构建请求体，发送到服务器，如果没有请求体，传递null
```

## Fetch API

```js
const resp = await fetch('url地址', { // 请求配置对象，可省略，省略则所有配置为默认值
  method: '请求方法', // 默认为GET
  headers: { // 请求头配置
    'Content-Type': 'application/json',
    'a': 'abc' 
  },
  body: '请求体内容' // 请求体
}); // fetch会返回一个Promise，该Promise会在接收完响应头后变为fulfilled

resp.headers; // 获取响应头对象
resp.status; // 获取响应状态码，例如200
resp.statusText; // 获取响应状态码文本，例如OK
resp.json(); // 用json的格式解析即将到来的响应体，返回Promise，解析完成后得到一个对象
resp.text(); // 用纯文本的格式解析即将到来的响应体，返回Promise，解析完成后得到一个字符串
```

## 特别注意

**无论使用哪一种API，AJAX始终都是异步的**

在初学的时候，可以把网络传输的时间想象的夸张一点，比如每一次请求和响应都要经过一年才能完成。这样有助于理解网络是异步这一点



# 附录

## PostMan

下载地址：https://www.postman.com/downloads/

安装后需要跟随课程做一些配置以便更好的学习老师的课程

## 常见问题

### 跨域错误

![image-20220510154337224](http://mdrs.yuanjin.tech/img/20220510154337.png)

这个错误通常发生在AJAX请求的时候，是一个跨域错误，这里需要了解什么叫跨域。

浏览器为了安全，制定了一个规则，即**页面的源和请求目标的源应该保持一致**，如果不一致，就产生了跨源或者叫跨域。

> 源 = 协议 + 主机 + 端口

比如：

| 页面源                          | 目标源                      | 是否跨域 |
| ------------------------------- | --------------------------- | -------- |
| https://baidu.com/news.html     | http://103.231.13.42/1.jpg  | 是       |
| https://www.baidu.com/news.html | http://baidu.com:8080/1.jpg | 是       |
| https://baidu.com/news.html     | https://baidu.com/1.jpg     | 否       |

- 浏览器对img、link、script的限制比较宽松，一般允许跨域
- 浏览器对AJAX比较严格，一般不允许跨域

**浏览器对跨域行为作出的不同限制，统称为同源策略**

如果在AJAX中出现跨域请求，就会报出以上错误。

但如果服务器明确告知浏览器允许跨域，则浏览器会允许AJAX跨域请求。

### 404错误

![image-20220510153910252](http://mdrs.yuanjin.tech/img/20220510153910.png)

浏览器请求某个资源，但服务器响应了一个404状态码，就会在控制台中报出这个错误。与此同时，你可以在浏览器的网络调试中进一步观察到这个错误。

404错误是一种非常常见的错误，它表示服务器告诉客户端：你要的资源并不存在

要解决这个错误，首先要检查请求的url地址是否正确。如果url地址正确，则可能是服务器的问题，需要联系后端开发人员或者将问题上报

### favicon

![image-20220510152948450](http://mdrs.yuanjin.tech/img/20220510152948.png)

报错内容：加载资源失败：服务器响应了404状态码

请求地址：`:5500/favicon.ico`

原因：

很多浏览器在解析页面后，如果发现页面中并没有使用`link`元素加载站点图标，会尝试请求以下地址来获取图标：

`站点协议://站点主机:站点端口/favicon.ico`

如果这个地址无法获得图标，就会报出相应错误

该错误会在下一次刷新后消失，是因为再次刷新后，浏览器*记忆*了之前无法获取图标的情况，就不再发出请求了。

### 其他问题

> ![image-20220510155614692](http://mdrs.yuanjin.tech/img/20220510155614.png)
>
> 网络断开，检查你的网络连接，或者检查你是否在调试工具中进行了网络断开调试

> ![image-20220510155742272](http://mdrs.yuanjin.tech/img/20220510155742.png)
>
> 访问的域名不存在，无法连接到服务器
