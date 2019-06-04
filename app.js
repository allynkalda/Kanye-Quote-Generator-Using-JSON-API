const express = require('express');
const app = express();
const axios = require('axios');

// MIDDLEWARE
app.use(express.static('public'));

// ROUTES

// GET `/` route
app.get('/', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/index.html');
});

// const getRandomQuote = async () => {
//     try {
//         return await axios.get('https://api.kanye.rest')
//     } catch (error) {
//         console.log(error);
//     }
// }

// const displayQuote = async () => {
//     const quote = getRandomQuote()
//         .then(response => {
//             if (response.data.message) {
//                 console.log(response.data.message)
//                 document.getElementById("quote").innerHTML = response.data.message;
//               }
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }




// About page
// app.get('/about', (request, response, next)=> {
//   response.sendFile(__dirname + '/public/about.html');
// });

// Gallery page
// app.get('/gallery', (request, response, next)=> {
//     response.sendFile(__dirname + '/public/gallery.html');
//   });

// 404 route
// app.get('/*', (request, response, next)=> {
//   response.status(404);
//   response.sendFile(__dirname + '/public/pagenot.html');
// });


// START THE SERVER
app.listen(3010, () => {
  console.log('My express up is running :) ');
});