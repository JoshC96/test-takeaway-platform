const fs = require("fs");

module.exports = {
  allCategories: function(req, res) {
    fs.readFile('./client/shop_data/allCategories.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      return res.json(JSON.parse(data));
    });
  }
};

