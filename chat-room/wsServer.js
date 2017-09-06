var ws = require("nodejs-websocket")

var PORT = 4000

//需要给每个客户端写个名字，定义计数器
var clientCount = 0

var server = ws.createServer(function (conn) {
    
    clientCount++
    conn.nickname = 'user' + clientCount

    var mes = {}
    mes.type = 'enter'
    mes.data = conn.nickname + ' comes in '
    //向每个客户端广播消息
    broadcast(JSON.stringify(mes))//为什么这里不能直接发送mes，而需要JSON.stringify(mes)

    //有客户端发送消息时，广播此消息
	conn.on("text", function (str) {
        console.log("Receive msg: "+ str)
        var mes = {}
        mes.type = 'message'
        mes.data = conn.nickname + '：'+str
        broadcast(JSON.stringify(mes))
    })

    //客户端关闭时，广播此消息
	conn.on("close", function (code, reason) {
        console.log("Connection closed")
        var mes = {}
        mes.type = 'leave'
        mes.data = conn.nickname + ' left '
        broadcast(JSON.stringify(mes))
    })

    conn.on("error", function (err) {
        console.log("handle err")
        console.log(err)
    })
}).listen(PORT)

console.log("WebSocket server listening on port " + PORT)

function broadcast(str){
    //取所有连接，让每个连接去调用sendText()
    server.connections.forEach(function(connection) {
        connection.sendText(str)   
    });
}