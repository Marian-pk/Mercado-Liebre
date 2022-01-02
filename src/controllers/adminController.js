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
    // ************ List all products ************
    products: (req,res) => {
        res.send('funciona :)');
        //res.render('vistaTodosLosProductos', {products:products});
    },
    // ************ Show Create Product Form ************
    createProduct: (req,res) => {
        res.send('Aca va la vista del formulario de creacion de producto');
    },
    // ************ Process the data from the Create Product Form and create the product ************
    newProduct: (req,res) => {
        let newProduct =  req.body;
        products.push(newProduct);
        res.send('El producto se ha creado correctamente');
    },
    // ************ Show edit Product Form ************
    editProduct: (req,res) => {
        res.send('Aca va el formulario de edición del Producto');

    },
    // ************ Process the data from the edit Product Form and update the product ************
    edit: (req,res) => {

    },
    // ************ Delete the product ************
    delete: (req,res) => {
        res.send('Des aca elimino el producto previamente creado');
    },


}
module.exports = mainController;