const express = require('express');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3030;
const path = require('path');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
    console.log(req.body)
})
let userzipcode = 91331;
let user_limit = 1;
app.get('/location', (req, res) => {
    const config = {
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${userzipcode}&price=1&sort_by=rating&limit=${user_limit}`,
        headers: {
            'Authorization': 'Bearer dfeBZkngziUaBNGBh9N05JV7npLPtIFq2vhmqVRiUrEO3XAVnZHyjxvxCQraXCbQCP5lmeaU3Yho9ae_NV5Vsh3f539FFXTnVctpYrTJuojBwU25A9V-btTg17spX3Yx'
        }
    };
    axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log(error);
        });
})
app.get('/credits', (req, res) => {
    console.log("Made By Pavon ,Carlos ,Napolion");
})

app.listen(3030, (err) => console.log(`${err ? err: 'Runnig on port 3030'}`), );