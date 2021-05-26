const express = require('express');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const {
  sayHello, 
  uppercase, 
  lowercase, 
  firstCharacters, 
  firstCharacter } = require('./lib/strings');

const app = express();
app.use(express.json());

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
  if (req.query.length){
    res.status(200).json({result: firstCharacters(req.params.string, req.query.length)})
  }
  res.status(200).json({result: firstCharacter(req.params.string)});
});

app.get('/numbers/add/:a/and/:b', (req, res, next) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const c = a + b;
  if(Number.isFinite(c))
  res.status(200).json({result: add(a, b)})
  else {
    res.status(400).json({error: 'Parameters must be valid numbers.'})
  }
/*  return Number.isNaN(a) || Number.isNaN(b)
? res.sendStatus(400)
: res.status(200).json({ result: add(a, b) });
});*/
});

app.get('/numbers/subtract/:b/from/:a', (req, res) =>{
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const c = b - a;
  if(Number.isFinite(c))
  res.status(200).json({result: subtract(a, b)})
  else {
    res.status(400).json({error: 'Parameters must be valid numbers.'})
  }
})

app.post('/numbers/multiply', (req, res, next) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const c = b * a;
  if(Number.isFinite(c))
  res.status(200).json({result: multiply(req.body.a, req.body.b)})
  else next()
},
(req, res, next) => {
  if(req.body.a === undefined || req.body.b === undefined)
  res.status(400).json({error: 'Parameters "a" and "b" are required.'})
  else
  res.status(400).json({error: 'Parameters "a" and "b" must be valid numbers.'})
});

app.post('/numbers/divide', (req, res, next) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const c = a / b;
  if(b > 0)
  res.status(200).json({result: divide(req.body.a, req.body.b)})
  else next()
},
(req, res, next) => {
  if(req.body.b === 0)
  res.status(400).json({error: 'Unable to divide by 0.'})
  else next()
},
(req, res, next) => {
  if(req.body.a === undefined || req.body.b === undefined)
  res.status(400).json({error: 'Parameters "a" and "b" are required.'})
  else
  res.status(400).json({error: 'Parameters "a" and "b" must be valid numbers.'})
});

app.post('/numbers/multiply', (req, res, next) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const c = b * a;
  if(Number.isFinite(c))
  res.status(200).json({result: multiply(req.body.a, req.body.b)})
  else next()
},
(req, res, next) => {
  if(req.body.a === undefined || req.body.b === undefined)
  res.status(400).json({error: 'Parameters "a" and "b" are required.'})
  else
  res.status(400).json({error: 'Parameters "a" and "b" must be valid numbers.'})
});

app.post('/numbers/remainder', (req, res, next) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  if(b > 0)
  res.status(200).json({result: remainder(req.body.a, req.body.b)})
  else next()
},
(req, res, next) => {
  if(req.body.b === 0)
  res.status(400).json({error: 'Unable to divide by 0.'})
  else next()
},
(req, res, next) => {
  if(req.body.a === undefined || req.body.b === undefined)
  res.status(400).json({error: 'Parameters "a" and "b" are required.'})
  else
  res.status(400).json({error: 'Parameters must be valid numbers.'})
});

module.exports = app;
