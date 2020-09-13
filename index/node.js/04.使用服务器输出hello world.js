var http = require('http');

var server = http.createServer();

server.on('request',function(request, response) {
    console.log('收到客户端的请求了，请求路径是' + request.url);

    // response对象有一个方法：write可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
    if(request.url ="/") {
        response.write('index');
    } else if (request.url = '/login') {
        response.write('登录');
    } else if (request.url = '/register') {
        response.write('注册');
    } else if (request.url = '/haha') {
        response.write('哈哈哈');
    }
    // response.write('hello');
    // response.write('nodejs');

    // 告诉服务器，我的话说完了，你可以呈递给用户了
    response.end();
});

server.listen(3000,function() {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问');
});