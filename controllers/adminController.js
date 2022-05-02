const db = require('../db');
const userController = require('./userController')

module.exports = {
    getAllUncompletedNotes: () => {
        return new Promise((resolve, reject) =>
            db.query(`SELECT * FROM notes WHERE note_status <> 'completed'`, function(error, results) {
                if (error) { return reject(error) }

                return resolve(results);
            })
        )
    },

    getAllNoteCardInformation: async () => {
        return new Promise((resolve, reject) => {
            let data = []

            //get note information
            db.query(`SELECT * FROM notes WHERE note_status <> 'completed'`, function(error, results) {
                if (error) { return reject(error) }

                var pending = results.length //used as an index, return function called when this reaches 0

                results.forEach(element => {
                    //get username
                    var username
                    userController.getUserFromID(element.user_id).then(function(result, error) {
                        if (error) throw (error)

                        if (result) {
                            username = result.username
                            email = result.email

                            //create new data entry and append to data array
                            data.push({ filename: element.filename, note_id: element.note_id, user_id: element.user_id, username: username, email: email })

                            //check if getUserFromID needs to run any more times, and call return function accordingly
                            console.log(pending)
                            if (--pending === 0) {
                                return resolve(data);
                            }
                        }
                    });
                });
            })
        })
    }, 

    getFileName: (req, res, file) => {
        
    }
}