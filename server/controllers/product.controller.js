const Product = require('../models/product.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createProduct = (request, response) => {

    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.getProductDetails = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ product: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
                .then(updatedProduct => response.json(updatedProduct))
                .catch(err => response.json(err))
        }
        
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
                .then(deleteConfirmation => response.json(deleteConfirmation))
                .catch(err => response.json(err))
        }
        
        