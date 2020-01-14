const express = require ('express');
const router = express.Router();

router.get('/' , (req, res) => {
    res.send('this is the cats page!');
    // responds to the request by sending the outcoming output on "/posts" (localhost:PORT/catpages)
});

router.get('/tom' , (req, res) => {
    res.send('Tom the cat says meaow!!!');
    // responds to the request by sending the outcoming output on "/posts" (localhost:PORT/catpages/tom)
});

router.get('/sylvester' , (req, res) => {
    res.send('Silvester the cat says meaow!!!');
    // responds to the request by sending the outcoming output on "/posts" (localhost:PORT/catpages/sylvester)
});

router.get('/felix' , (req, res) => {
    res.send('Felix the cat says meaow!!!');
    // responds to the request by sending the outcoming output on "/posts" (localhost:PORT/catpages/felix
});

module.exports = router;
