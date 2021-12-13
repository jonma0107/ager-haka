const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/front-end/dist/ager-haka'));

// Send all requests to index.html
app.get('*', (req, res) {
  res.sendFile('./front-end/dist/ager-haka/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 8080);