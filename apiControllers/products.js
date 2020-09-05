const fs = require("fs");

// Defining methods for the API WRAP
module.exports = {
  allProducts: function(req, res) {
    fs.readFile('./client/shop_data/allProducts.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      return res.json(JSON.parse(data));
    });
  },
  productsById: function(req, res) {
    fs.readFile('./client/shop_data/allProducts.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      let result = JSON.parse(data).filter(product => {
        if(product.id === parseInt(req.query.id)){
          return product;
        }
      });
      return res.json(result);
    });
  },
  productsByCategory: function(req, res) {
    fs.readFile('./client/shop_data/allProducts.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      let result = JSON.parse(data).filter(product => {
        if(product.category.id === req.query.id){
          return product;
        }
      });
      return res.json(result);
    });
  },
  productsInCart: function(req, res) {
    fs.readFile('./client/shop_data/allProducts.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      let cart = req.query.cart.split(',');
      let result = JSON.parse(data).filter(product => {
        for (let i = 0; i < cart.length; i++) {
          const element = cart[i];
          if(product.id === parseInt(element)){
            return product;
          }
        }
      });
      return res.json(result);
    });
  }
};
