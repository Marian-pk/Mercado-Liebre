const path = require('path')

const mainController = {
    home: (req,res) => {
        res.sendFile(path.join(__dirname + '/../views/home.html'));
    }
}

module.exports = mainController;