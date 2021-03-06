// ************ Require's ************
const path = require('path')
const fs = require('fs');

// ************ Add de '.' in numbers over 999 ************
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 

// ************ Jason convert ************
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// ************ Controller ************
const mainController = {
    home: (req,res) => {
        res.render('home');
    },
    login: (req,res) => {
        res.render('login');
    },
    register: (req,res) => {
        res.render('register');
    },
}

module.exports = mainController;





