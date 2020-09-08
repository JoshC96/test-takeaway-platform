const fs = require("fs");

// Defining methods for the API WRAP
module.exports = {
  allStores: function(req, res) {
    fs.readFile('./client/shop_data/allStores.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      return res.json(JSON.parse(data));
    });
  },
  allStates: function(req, res) {
    fs.readFile('./client/shop_data/allStores.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      let states = []
      function onlyUnique(value, index, self) { 
          return self.indexOf(value) === index;
      }

      JSON.parse(data).forEach(element => {
        states.push(element.groupName)
      });
      
      let result = states.filter( onlyUnique ); // returns ['a', 1, 2, '1']

      return res.json(result);
      
    });
  },
  storesByState: function(req, res) {
    fs.readFile('./client/shop_data/allStores.txt', function read(err, data) {
      if (err) {
          throw err;
      }

      let result = JSON.parse(data).filter(state => {
        if(state.groupName === req.query.state){
          return state;
        }
      });

      return res.json(result);
    });
  }
};
