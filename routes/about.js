var express = require('express');
var router = express.Router();

/* GET /about */
router.get('/', function (req, res, next) {
    const aboutInfo = {
        title: "Lab 3",
        description: "This is my First fully working Node JS application",
        version: "1.0.0",
        contact: {
            email: "abc@gmail.com",
            phone: "+1 00000000000"
        },
    };
    res.render('about', aboutInfo);
});

module.exports = router;
