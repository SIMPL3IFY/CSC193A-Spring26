'use strict';
 
const express = require('express');
const app = express();
 
// Exercise 1: /math/circle/:r
app.get('/math/circle/:r', function (req, res) {
  let r = parseFloat(req.params['r']);
  let area = Math.PI * r * r;
  let circumference = Math.PI * 2 * r;
 
  res.type('json');
  res.json({ "area": area, "circumference": circumference });
});
 
// Exercise 2: /hello/name
app.get('/hello/name', function (req, res) {
  let first = req.query['first'];
  let last = req.query['last'];
 
  let missing = [];
  if (!first) missing.push('first');
  if (!last) missing.push('last');
 
  if (missing.length > 0) {
    res.type('text').status(400)
       .send('Missing Required GET parameters: ' + missing.join(', '));
  } else {
    res.type('text').send('Hello ' + first + ' ' + last);
  }
});
 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});