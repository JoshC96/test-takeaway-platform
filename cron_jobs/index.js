const cron = require("node-cron");
const fs = require("fs");
const axiosInstance = require("../routes/axiosInstance");

cron.schedule("* * * * *", function() {
    console.log("running a task every minute");

    axiosInstance
      .get('/api/products.json?transform=1')
      .then(function (response) {
        fs.writeFile('./client/shop_data/allProducts.txt', JSON.stringify(response.data), function (err) {
            if (err) throw err;
            console.log('Saved products');
        });
      }).catch(function(err){
        console.log(err)
      });

    axiosInstance
      .get('/api/categories.json')
      .then(function (response) {
        fs.writeFile('./client/shop_data/allCategories.txt', JSON.stringify(response.data), function (err) {
            if (err) throw err;
            console.log('Saved categories');
        });
      });

    axiosInstance
      .get('/api/extras.json')
      .then(function (response) {
        fs.writeFile('./client/shop_data/allExtras.txt', JSON.stringify(response.data), function (err) {
            if (err) throw err;
            console.log('Saved Extras');
        });
      });
      
    axiosInstance
      .get('/api/stores.json')
      .then(function (response) {
        fs.writeFile('./client/shop_data/allStores.txt', JSON.stringify(response.data), function (err) {
            if (err) throw err;
            console.log('Saved Stores');
        });
      });
    
});