// var ws = require("nodejs-websocket")
var app = require('http').createServer()
var io = require('socket.io')(app)

var PORT = 4000

//需要给每个客户端写个名字，定义计数器
var clientCount = 0

app.listen(PORT)

io.on('connection', function(socket){
    clientCount++
    socket.nickname = 'user' + clientCount

    /**
     * 这里要注意，socket.emit()和io.emit()是有区别的
     * 
     * socket.emit()中的emit指发送消息。
     * io.emit()则是广播消息
     */
    io.emit('enter', socket.nickname + ' comes in ')
    
    socket.broadcast.emit('user connected');

    socket.on('message', function(str){
        io.emit('message', socket.nickname + '：' + str)
    })

    socket.on('disconnect', function(){
        io.emit('leave', socket.nickname + ' left ')
    })

})

console.log("WebSocket server listening on port " + PORT)
