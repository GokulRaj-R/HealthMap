const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const signin = require('./controllers/signin');
const signup = require('./controllers/signup');
const submit = require('./controllers/submit');
const gender = require('./controllers/gender');
const month = require('./controllers/month');
const age = require('./controllers/age');
const mr = require('./controllers/mr');
const dlist = require('./controllers/dlist');

const server = express();
const cors = require('cors');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use(cors());

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'healthmap'
  }
});

server.post('/signin' , (req,res) => { signin.handleSignin(req,res,db) })
server.post('/signup', (req,res) => { signup.handleSignup(req,res,db) })
server.post('/submit', (req,res) => { submit.handleSubmit(req,res,db) })
server.post('/gender', (req,res) => { gender.handleGender(req,res,db) })
server.post('/month', (req,res) => { month.handleMonth(req,res,db) })
server.post('/age', (req,res) => { age.handleAge(req,res,db) })
server.post('/mr', (req,res) => { mr.handlemr(req,res,db) })
server.post('/dlist', (req,res) => { dlist.handledList(req,res,db) })


server.listen(3000);
