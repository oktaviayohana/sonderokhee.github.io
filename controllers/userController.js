const db = require('../db');
const bcrypt = require('bcryptjs');
const passport = require('passport-local');

exports.login = (req, res) => {
    try {
        const {email, password} = req.body;

        //get hashed password for compare
        db.query("SELECT password FROM users WHERE email = ?", email, function(error, result) {
            if (error) throw error;
            
            const hashedPassword = result[0].password;
            
            if(email || password) {
                //compare emails
                db.query('SELECT * FROM users WHERE email = ?', email, function(error, results) {
                    if (error) throw (error );
                    if (results.length > 0) {
                        //compare password
                        if (bcrypt.compareSync(password, hashedPassword.toString())) {
                            req.session.loggedin = true;
                            
                            //get user ID, upload session ID to database
                            db.query('SELECT user_id FROM users WHERE email = ?', email, function(error, result) {
                                if (error) throw error;
                                let user_id = result[0].user_id;

                                //update db
                                db.query('UPDATE users SET session_id = ? WHERE user_id = ?', [req.session.id, user_id], function(error) {
                                    if (error) throw error;
                                });

                            });

                            //everything has been successfull, redirect to homepage
                            res.redirect('/');
                        } else {
                            //no password found
                            res.send('Incorrect Username or Password');
                        }
                    } else {
                        //no email found
                        res.send('Incorrect Username or Password');
                    }
                    res.end();
                });
            } else {
                //no data entered
                res.send('Please enter Username and Password');
            }
        });
    } catch (error) {
        console.log(error);
    }
}

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


exports.getLoggedInUser = (req, res) => {
    //get user id where session id = session id
}

        

    