const axiosInstance = require("../routes/axiosInstance");


module.exports = {
  allCategories: function(req, res) {
    axiosInstance
      .get('/api/categories.json')
      .then(function (response) {
        return res.json(response.data);
      });
  }
};

