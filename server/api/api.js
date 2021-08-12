if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const router = express.Router();
const GCI = require('gci');
const gci = new GCI();

router.get('/courses', (req, res) => {
    gci.authorize({
        client_secret: process.env.CLIENT_SECRET,
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.API_REDIRECT,
        server: { req: req, res: res }
    }, (data) => {
        res.json(data);
    });
});

module.exports = router;