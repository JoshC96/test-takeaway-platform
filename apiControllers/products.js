const axiosInstance = require("../routes/axiosInstance");

// Defining methods for the API WRAP
module.exports = {
  allProducts: function(req, res) {
    axiosInstance
      .get('/api/products.json?transform=1')
      .then(function (response) {
        return res.json(response.data);
      });
  },
  productsById: function(req, res) {
    axiosInstance
      .get('/api/products.json?id='+req.query.id)
      .then(function (response) {
        return res.json(response.data);
      });
  },
  productsByCategory: function(req, res) {
    axiosInstance
      .get('/api/products.json?transform=1&category='+req.query.id)
      .then(function (response) {
        return res.json(response.data);
      });
  },
  productsInCart: function(req, res) {
    axiosInstance
      .get('/api/cart.json?cart='+req.query.cart)
      .then(function (response) {
        return res.json(response.data);
      });
  }
};
