const express = require('express');
const userController = require('../controllers/userController');
const passport = require('passport');

const router = express.Router(); 

router.post('/register', userController.register);
router.post('/login',  passport.authenticate('local', {
    failureRedirect: '/login',
}), function(req, res) {
    res.redirect('/')
});

module.exports = router;