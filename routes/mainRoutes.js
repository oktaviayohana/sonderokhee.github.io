const express = require('express');
const mainController = require('../controllers/mainController');
const passport = require('passport')
const { isAuthenticated } = require('../auth/isAuthenticated');

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
    res.render('index', { user: req.user})
});

router.get('/register', (req, res) => {
    res.render('register', { 
        title: 'scribblenotes'
     });
});

router.get('/login', (req, res) => {
    res.render('login', { 
        title: 'scribblenotes'
     });
});

router.get('/new_note', isAuthenticated, (req, res) => {
    res.render('new_note', { 
        title: 'scribblenotes',
        user: req.body.user
    });
});
router.post('/new_note', mainController.fileUpload, (req, res) => {
    console.log(req.user);
});

router.get('/about', (req, res) => {
    res.render('about', { 
        title: 'scribblenotes',
        user: req.body.user
     });
});

router.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'scribblenotes',
        user: req.body.user
     });
});

router.get('/logout', function(req, res, next) {
    console.log('hi');
    req.logout();
    res.redirect('/');
});

module.exports = router;