const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.post('/updateNote', function(req, res) {
    adminController.updateNoteStatus(req.body.note_id, req.body.note_status)

    res.redirect('/admin')
})

module.exports = router
