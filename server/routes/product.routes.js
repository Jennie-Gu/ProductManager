const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);     /* This is new */
    app.get('/api/products', ProductController.getProducts); 
    app.get('/api/:id', ProductController.getProductDetails);
}

