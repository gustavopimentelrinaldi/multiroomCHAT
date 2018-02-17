/* import server config */
var app = require("./config/server");

/* port listener */
app.listen(8080, function(){
  console.log("Servidor online!!");
})