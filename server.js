const express = require('express');
const PORT = process.env.PORT || 3030;
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ exrended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
    console.log(req.body)
})
app.get('/', (req, res) => {
    console.log(req.body);
})

app.listen(3030, (err) => console.log(`${err ? err: 'Runnig on port 3030'}`), );

//comment added by Napoleon Tue 4:12 PM
