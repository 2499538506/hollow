// 1.加载 http 核心模块
var http = require("http");

// 2.使用 http.createServer() 方法创建一个 web 服务器
var server = http.createServer();

// 3.服务器 提供服务：对数据的服务
// 发请求
// 接受请求
// 处理请求
// 给个反馈 (发送响应)
// 注册request请求事件 当客户端请求过来，就会触发request请求事件，然后执行第二个函数：回调处理

server.on("request", function () {
  console.log("收到客户端的请求了");
});

// 4.绑定端口号，启动服务器
server.listen(8012, function () {
  console.log("服务器启动成功了，可以通过http://127.0.0.1:8012/ 来进行访问");
});
