const express = require('express');

//enviroment variable
const PORT = process.env.PORT || 3000

//Create our App
var app = express();
//redirect openweather map https traffic to http since we're using heroku
//free service
app.use((req, res, next) => {
  (req.headers['x-forwarded-proto'] === 'http') ?
    next() :
    res.redirect(`http://${req.hostname}${req.url}`);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('express server is up on port ' + PORT);
});
