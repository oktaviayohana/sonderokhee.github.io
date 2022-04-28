const { response } = require("express");
const db = require("../db");
const userController = require('./userController')

exports.fileUpload = (req, res) => {

    //local variable
    const file = req.files.csv;
    const filename = req.files.csv.name;
    const user_id = req.user.id;

    //handle no file upload
    if(!req.files) return res.status(400).send('No files were uploaded')

    //check if email exists
    if (!user_id) {
        return res.send('No user logged in. (this may be a bug)')
    }

    //UPDATE TO CSV MIMETYPE
    if (file.mimetype === 'application/vnd.ms-excel') {
        file.mv('./public/files/csv_files/' + filename, (err) => {
            if (err) {
                console.log(err);
                res.redirect('/')
                return res.status(500);
            }

            //insert into db
            db.query(`INSERT INTO notes SET ?`, {csv_file: filename, user_id: user_id }, function(err) {
                if (err) {
                    throw err;
                } else {
                    console.log(filename + ' successfully uploaded to database.')
                }
            });

            

            return res.redirect('/');
        });
    } else {
        res.send("Please upload CSV filetype");
    }
}