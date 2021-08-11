const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: "API not finished."
    });
});

module.exports = router;