const db = require('../db');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
    console.log(req.body);
    
    const {username, email, password, password2} = req.body;
    let errors = [];


    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, result) => {
        if(error){
            console.log(error);
        }

        if(result.length > 0){
            errors.push({ msg: 'This email is already in use'});
            res.render('register', {
                errors
            });  
        } else if(password !== password2){
            errors.push({ msg: 'Passwords do not match'});
            res.render('register', {
                errors
            }); 
        }

            //salt for hashed password
            const saltRounds = 10;

            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    db.query('INSERT INTO users set ?', {username: username, email: email, password: hash, }, (error, result) => {

                        if(error){
                            console.log(error);
                        } else {
                            console.log(result);
                            errors.push({ msg: 'Success!' });
                            res.render('register', {
                                errors
                            }); 
                        }
                    })
                });
            });
            });
        }