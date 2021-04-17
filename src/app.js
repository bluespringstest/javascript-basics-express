const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

//req = request made to server and res = response to client
app.get('/strings/hello/:sayHello', (req, res) => {
  res.status(200).json({result: `Hello, ${req.params.sayHello}!`})
})

//real answer:
/*
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

*/


module.exports = app;
