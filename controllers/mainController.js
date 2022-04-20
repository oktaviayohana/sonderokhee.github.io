exports.fileUpload = (req, res) => {
    try {
        let csvFile;
        let uploadPath;

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        csvFile = req.files.csv;
        uplaodPath = __dirname + '/temp/' + csvFile.name;

        // TODO update to upload to database
        csvFile.mv(uploadPath, function(err) {
            if (err)
            return res.status(500).send(err)
        });

        res.send('File uploaded.')
    } catch(error) {
        console.log(error)
    }
}