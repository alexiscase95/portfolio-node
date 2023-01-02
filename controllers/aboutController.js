const fs = require('fs');

const about = fs.readFileSync('about.json', 'utf8');

exports.getAbout = function(req, res) {
    console.log(about)
    res.send(about);
}

exports.updateAbout = function(req, res) {
    console.log(about)
    res.send("Updating about");
}