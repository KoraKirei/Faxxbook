var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // 접속한 클라이언트의 정보가 수신되면
  socket.on('login', (data) => {
    console.log('Client logged-in:\n name:' + data.name + '\n email: ' + data.email);

    // socket에 클라이언트 정보를 저장한다
    socket.name = data.name;
    socket.email = data.email;

    // 접속된 모든 클라이언트에게 메시지를 전송한다
    io.emit('login', data.name );
  });

  // 클라이언트로부터의 메시지가 수신되면
  socket.on('chat', (data) =>  {
    console.log('Message from %s: %s', socket.name, data.msg);

    var msg = {
      from: {
        name: socket.name,
        email: socket.email
      },
      msg: data.msg
    };

    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    socket.broadcast.emit('chat', msg);

    // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
    // socket.emit('s2c chat', msg);

    // 접속된 모든 클라이언트에게 메시지를 전송한다
    // io.emit('s2c chat', msg);

    // 특정 클라이언트에게만 메시지를 전송한다
    // io.to(id).emit('s2c chat', data);
  });

  // force client disconnect from server
  socket.on('forceDisconnect', () => {
    socket.disconnect();
  })

  socket.on('disconnect', () => {
    console.log('user disconnected: ' + socket.name);
  });

});

server.listen(9090, function() {
  console.log('Socket IO server listening on port 9090');
});