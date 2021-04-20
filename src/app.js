const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters, firstCharacter } = require('./lib/strings');

const app = express();

//req = request made to server and res = response to client
app.get('/strings/hello/:sayHello', (req, res) => {
  res.status(200).json({result: `Hello, ${req.params.sayHello}!`})
})

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({result: uppercase(req.params.string)});
})

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({result: lowercase(req.params.string)});
})

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({result: firstCharacters(req.params.string)});
});

app.get('/strings/first-characters/?:string,length=[n]', (req, res) => {
  console.log(req);
  res.status(200).json({result: firstCharacter(req.query.string)});
});
//real answer:
/*
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

*/


module.exports = app;
