const path = require('path')

const mainController = {
    home: (req,res) => {
        res.render('home');
    },
    login: (req,res) => {
        res.render('login');
    },
    register: (req,res) => {
        res.render('register');
    }
}

module.exports = mainController;