const express = require('express');

//Create our App

var app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('express server is up on port 3000');
});