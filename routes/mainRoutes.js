const { response } = require('express');
const { request } = require('express');
const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.send('Welcome back, ' + req.session.email)
    } else {
        res.render('index', { title: '2nd Unit'});
    }
});

router.get('/register', (req, res) => {
    res.render('register', { title: '2nd Unit'});
});

router.get('/login', (req, res) => {
    res.render('login', { title: '2nd Unit'});
});

router.get('/about', (req, res) => {
    res.render('about', { title: '2nd Unit'});
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: '2nd Unit'});
});

module.exports = router;