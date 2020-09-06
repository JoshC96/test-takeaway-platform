const fs = require("fs");

module.exports = {
  allExtras: function(req, res) {
    fs.readFile('./client/shop_data/allExtras.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      return res.json(JSON.parse(data));
    });
  }
};