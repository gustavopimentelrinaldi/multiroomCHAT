/* import server config */
var app = require("./config/server");

/* port listener */
var server = app.listen(8080, function(){
  console.log("Servidor online!!");
})

require('socket.io').listen(server);