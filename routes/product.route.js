var express = require('express');
    var router = express.Router() ;
    // Require the controllers WHICH WE DID NOT CREATE YET!!
    const product_controller = require('../controllers/product.controller');
  
    // a simple test url to check that all of our files are communicating correctly.
    router.get('/test', product_controller.test);
    module.exports = router;
    router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update) ;
router.delete( '/:id/delete',product_controller.product_delete) ;
//router.put( )
