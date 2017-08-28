const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustache = require('mustache-express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/test');
let home = require('./controllers/home.js');
let login = require('./controllers/login.js');


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

app.get('/users',function(req,res){
  res.render("users");
})

app.post('/users',function(req,res){
  res.render('users');
});

app.get('/register',function(req,res){
  res.render("register");
})
app.post('/register',function(req,res){
  res.render('register');
})
//
// app.get('/login',function(req,res){
//   res.render("login");
// });


app.listen(3000, function(){
  console.log("Node.js is so fun!!");
})
