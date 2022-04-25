const express = require('express');
const multer = require('multer');
const mainController = require('../controllers/mainController')

const router = express.Router();



router.get('/', (req, res) => {
    console.log('user: ' + req.session.email)
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
    console.log('session: ' + req.session.id)
    res.render('login', { 
        title: 'scribblenotes'
     });
});

router.get('/new_note', (req, res) => {
    const email = req.session.email;
    console.log('mainRouter: email is ' + email);
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