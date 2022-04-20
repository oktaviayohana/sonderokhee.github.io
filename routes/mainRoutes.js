const { response } = require('express');
const { request } = require('express');
const express = require('express');
const { changeUser } = require('../db');
const mainController = require('../controllers/mainController')

const router = express.Router();



router.get('/', (req, res) => {
    console.log(req.body.user)
    if (req.session.loggedin) {
        res.render('index', {
            user: req.body.user
        })
    } else {
        res.redirect('/login')
    }
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

router.get('/new_note', (req, res) => {
    res.render('new_note', { 
        title: 'scribblenotes',
        user: req.body.user
     });
});
router.post('/new_note', mainController.fileUpload)

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

module.exports = router;