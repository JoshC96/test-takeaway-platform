// Defining methods for the API WRAP
module.exports = {
  findAll: function(req, res) {
    return {title:"thing"}
  },
  findById: function(req, res) {
    console.log("reached find by ID")
  }
  ,
  findByCat: function(req, res) {
    console.log("reached find by cat")
  }
};
