
//instalar express para que esto funcione

var menus = require('./data/restaurantsMenus.json');
var users = require('./data/users.json');
var express = require('express');
var app = express();
var cors = require('cors');

//Hay que instalarlo desde la consola previamente
app.use(cors());
//Hay que instalarlo desde la consola previamente
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/menus', function(req, res) {
  setTimeout(function(){
    res.send(JSON.stringify(menus));
  }, 3000);
});

//POST http://localhost:3001/login {login: "vero", password : "1234"}
//prueba para hacer un login (lee un JSON que podemos ejecutar con el postman)
app.post('/login', function(req, res) {
  //Buscar por login
  //comprobar pass
  //Devolver info del usuario
  var userInfo = users.filter(user => user.login == req.body.login && user.password == req.body.password);
  if(userInfo.length > 0){
      res.setHeader('Content-Type', 'application/json');
      res.status(200);
      res.end(JSON.stringify(userInfo[0]));
      return;
  }
  //var a1 =  users;
  //debugger;

  res.status(403);
  res.end(null);
});

var port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});