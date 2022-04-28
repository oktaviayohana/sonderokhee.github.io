const db = require('../db');

exports.getAllUncompletedNotes = function() {
    db.query('SELECT * FROM notes WHERE note_status != `completed`', function(error, results) {
        if (error) throw (error);

        return results;
    })
}