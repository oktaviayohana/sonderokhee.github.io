const { response } = require('express');
const { request } = require('express');
const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    res.render('index', )
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'scribblenotes'});
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'scribblenotes'});
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'scribblenotes'});
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'scribblenotes'});
});

module.exports = router;