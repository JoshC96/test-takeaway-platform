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
  productsByStore: function(req, res) {
    fs.readFile('./client/shop_data/allProducts.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      let result = JSON.parse(data).filter(product => {
        if(product.storeId === req.query.storeId){
          return product;
        }
      });
      return res.json(result);
    });
  }
};
