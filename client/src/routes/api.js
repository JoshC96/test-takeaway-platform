const axios = require("axios");

export default {
  allProducts: function() {
    return axios.get("/api/products");
  },
  productsById: function(id) {
    return axios.get('/api/products/id?id='+id)
  },
  productsByCategory: function(id) {
    return axios.get('/api/products/category?id='+id)
  },
  allCategories: function() {
    return axios.get('/api/categories')
  }
};
