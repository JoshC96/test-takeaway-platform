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
  productsInCart: function(cart) {
    let cartString = JSON.parse(cart).join();
    return axios.get('/api/products/cart?cart='+cartString)
  },
  allCategories: function() {
    return axios.get('/api/categories')
  },
  allExtras: function() {
    return axios.get('/api/extras')
  },
  getStripeSecret: function(amountToCharge) {
    return axios.get('/stripe/secret?amount='+amountToCharge)
  },
  sendKountaOrder: function(orderObj) {
    return axios.post('/kounta/newOrder',{
      data: orderObj
    })
  }
};
