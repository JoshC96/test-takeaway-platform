import Cart from "../components/cart"

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
  productsByStore: function(id) {
    let storeId = Cart.locationId ? Cart.locationId : 0;
    return axios.get('/api/products/store?storeId='+storeId+'&categoryId='+id)
  },
  allCategories: function() {
    return axios.get('/api/categories')
  },
  allExtras: function() {
    return axios.get('/api/extras')
  },
  allStores: function() {
    return axios.get('/api/stores')
  },
  allStates: function() {
    return axios.get('/api/stores/states')
  },
  storesByState: function(state) {
    return axios.get('/api/stores/state?state='+state)
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
