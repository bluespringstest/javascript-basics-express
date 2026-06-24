const express = require('express');

const app = express();
app.use(express.json());

// TODO: Implement the routes exercised by the tests in __tests__/
//
//   /strings   -> GET  /strings/hello/:string
//                 GET  /strings/upper/:string
//                 GET  /strings/lower/:string
//                 GET  /strings/first-characters/:string
//
//   /numbers   -> GET  /numbers/add/:a/and/:b
//                 GET  /numbers/subtract/:b/from/:a
//                 POST /numbers/multiply
//                 POST /numbers/divide
//                 POST /numbers/remainder
//
//   /booleans  -> POST /booleans/negate
//                 POST /booleans/truthiness
//                 GET  /booleans/is-odd/:number
//                 GET  /booleans/:string/starts-with/:character
//
//   /arrays    -> POST /arrays/element-at-index/:index
//                 POST /arrays/to-string
//                 POST /arrays/append
//                 POST /arrays/starts-with-vowel
//                 POST /arrays/remove-element

module.exports = app;
