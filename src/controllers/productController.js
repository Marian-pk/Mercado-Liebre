// ************ Require's ************
const path = require('path')
const fs = require('fs');

// ************ Add de '.' in numbers over 999 ************
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 

// ************ Jason convert ************
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    productDetail: (req,res) => {
        let id = req.params.id;
        let product = products.find(product => id == product.id);
        res.render('productDetail', {product: product},toThousand);
    }

}


module.exports = productController;