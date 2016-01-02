var http = require('http')
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

// -       ' ' ' '
// -       | | | |
// -    @@@@@@@@@@@@@
// -    {~ ~ ~ ~ ~ ~}
// -    {~ ~ ~ ~ ~ ~}
// -  @@@@@@@@@@@@@@@@@
// - {~ * ~ * ~ * ~ * ~}
// - {~ * ~ * ~ * ~ * ~}
// - @@@@@@@@@@@@@@@@@@@
// -    _____)*(_____
// -   /_____________\
//       mucha torta

var server = http.createServer(app)
  var io = require('socket.io')(server)
  io.on('connection', function(sock, err){
    if(err) console.log(err)
    console.log('connection', sock)
    sock.on('message', function(dt) {
      console.log(dt)
      sock.emit('message', 'eyyy sup')
    })
  })

server.listen(config.port)
