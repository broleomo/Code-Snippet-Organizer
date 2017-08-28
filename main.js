const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/test');
let users = require('./views/home');
let login = require('./views/login');


app.engine('mustache', mustache());
app.set('views', './views')
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.get("/", function(req, res) {
  res.render("home");
});


//
// app.get('/login',function(req,res){
//   res.render("login");
// });






app.listen(3000, function(){
  console.log("Node.js is so fun!!");
})
