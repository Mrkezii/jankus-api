
const Product = require('../app/models/product.model');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    Product.find(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
    //res.send('Welcome to our api')
  
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            Item: req.body.Item,
            price: req.body.price,
            Quantity : req.body.Quantity,
        }
    );
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};
exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
exports.product_delete = function (req, res, next) {
    Product.findByIdAndDelete(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);

        res.send('Product Deleted');
    });
};
