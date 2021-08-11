const path = require('path');

const express = require('express');
const app = express();

const api = require('./api/router');

app.use('/api', api);
app.use('/styles', express.static(path.join(__dirname, '/../client/styles')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/../client'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(process.env.PORT || 3000, e => {
    if(e) throw e;
    console.log('Server running...');
});