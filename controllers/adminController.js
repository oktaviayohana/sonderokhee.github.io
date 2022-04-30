const db = require('../db');

module.exports = {
    getAllUncompletedNotes: () => {
        return new Promise((resolve, reject) =>
            db.query(`SELECT * FROM notes WHERE note_status <> 'completed'`, function(error, results) {
                if (error) { return reject(error) }

                return resolve(results);
            })
        )
    },
}