const axiosInstance = require("../routes/axiosInstance");

// Defining methods for the API WRAP
module.exports = {
  allProducts: function(req, res) {
    axiosInstance
      .get('/api/products.json')
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
      .get('/api/products.json?category='+req.query.id)
      .then(function (response) {
        return res.json(response.data);
      });
  }
};
