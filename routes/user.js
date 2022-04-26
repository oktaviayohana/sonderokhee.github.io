const express = require('express');
const userController = require('../controllers/userController');
const passport = require('passport')
const router = express.Router();
const localAuth = require('../auth/passport');

router.post('/register', userController.register);
router.post('/login',  passport.authenticate('local', { 
    successMessage: 'passport auth success',
    successRedirect: '/',
    failureMessage: 'passport auth failed',
    failueRedirect: '/about'
}));

module.exports = router;