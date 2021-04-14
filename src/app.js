const express = require('express');

const app = express();
const APP_PORT = 3000;

//req = request made and res = response to client

app.get('/strings/hello/world', (req, res) => {
  res.send({result: 'Hello, world!'});
});

module.exports = app;
