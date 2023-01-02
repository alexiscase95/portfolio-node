const fs = require('fs');

const about = JSON.parse(fs.readFileSync('about.json', 'utf8'));

exports.getAbout = function(req, res) {
    res.status(200).json({
        status: 'success',
        data: {
            about
        }
    });
}

exports.updateAbout = function(req, res) {
    res.status(200).json({
        status: 'success',
        data: {
            about
        }
    });
}