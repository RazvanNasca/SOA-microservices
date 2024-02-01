'use strict';

const controller = require('../controller/controller');

module.exports = (app) => {
    app.route('/getAllProducts').get(controller.getAllProducts);
    app.route('/getProductsInCart').get(controller.getProductsInCart);
    app.route('/addProductToCart').post(controller.addProductToCart);
    app.route('/sendOrder').post(controller.sendOrder);
}
