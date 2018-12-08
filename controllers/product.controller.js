const Product = require("../app/models/product.model");
//Simple version, without validation or sanitation
exports.test = function(req, res) {
  Product.find(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};
//res.send('Welcome to our api')

exports.product_create = function(req, res, next) {
  let product = new Product({
    item: req.body.item,
    price: req.body.price,
    quantity: req.body.quantity
  });
  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};
exports.product_details = function(req, res, next) {
  Product.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};
exports.product_update = function(req, res, next) {
  //res.send('Welcome to our api')
  const content = {
    item: req.body.item,
    price: req.body.price,
    quantity: req.body.quantity,
    tax: req.body.tax
  };
  Product.findByIdAndUpdate(req.params.id, content)
    .then(x => {
      console.log(x);
      return res.send(x);
    })
    .catch(err => res.send({ err }));
};
exports.product_delete = function(req, res, next) {
  Product.findByIdAndDelete(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);

    res.send("Product Deleted");
  });
};
