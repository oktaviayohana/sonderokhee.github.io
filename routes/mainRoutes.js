const express = require('express');
const mainController = require('../controllers/mainController')
const passport = require("passport");

const router = express.Router();

router.get('/', (req, res) => {
    
    console.log(req.isAuthenticated);
    res.render('index')
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
router.get('/logout', (req, res) => {
    res.render('login', { 
        title: 'scribblenotes'
     });
});

router.get('/new_note', (req, res) => {
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

router.get('/settings', (req, res) => {
    res.render('settings', { 
        title: 'Settings',
        user: req.body.user
     });
});
router.get('/admin', (req, res) => {
    res.render('admin_dashboard', { 
        title: 'Admin',
        user: req.body.user
     });
});


router.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'scribblenotes',
        user: req.body.user
     });
});

module.exports = router;