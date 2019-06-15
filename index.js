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
}