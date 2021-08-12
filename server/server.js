require('dotenv').config();

const path = require('path');

const express = require('express');
const app = express();

const GCI = require('gci');
const gci = new GCI();

app.use('/styles', express.static(path.join(__dirname, '/../client/styles')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/../client'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/auth', (req, res) => {
    gci.authorize({
        client_secret: process.env.CLIENT_SECRET,
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
        server: { req: req, res: res }
    }, (data) => {
        res.json(data);
    });
});

app.listen(process.env.PORT || 3000, e => {
    if(e) throw e;
    console.log('Server running...');
});