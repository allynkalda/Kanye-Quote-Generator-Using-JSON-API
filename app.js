const express = require('express');
const app = express();

// MIDDLEWARE
app.use(express.static('public'));

// ROUTES

// GET `/` route
app.get('/', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/index.html');
});

// START THE SERVER
app.listen(3010, () => {
  console.log('My express up is running :) ');
});