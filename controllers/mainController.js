

exports.fileUpload = (req, res) => {
    try {
        let csvFile;
        let uploadPath;

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        csvFile = req.files.csv;
        uploadPath = __dirname + "/temp/" + csvFile.name;
        console.log(csvFile.name);
        console.log("upload path: " + uploadPath);

        // TODO update to upload to database
        csvFile.mv(uploadPath, function(err) {
            if (err) {
                return res.status(500).send(err)
            }
        });

        return res.send('File uploaded. (dev note: user would now be redirected to dashboard where they get a notification of success rather than seeing this message')
    } catch(error) {
        console.log(error)
    }
}