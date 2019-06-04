// const axios = require('axios');
const url = 'https://api.kanye.rest';

const bleep = new Audio();
bleep.src = "kanye.wav";

function getRandomQuote() {
    fetch(url)
        .then(function (response) {
            return response.json(); 
        })
        .then(function (data) {
            console.log(data)
            document.getElementById("quote").innerHTML = data.quote;
        })
        .catch(function (error) {
            console.log(error)
        })
    // axios.get(url)
    //     .then(function (response) {
    //         console.log(response.data);
    //         document.getElementById("quote").innerHTML = response.data.quote;
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
}