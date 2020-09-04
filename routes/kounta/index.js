const router = require("express").Router();
const axios = "axios";

// Matches with "/kounta/newOrder"
router.get('/newOrder', async (req, res) => {
    axios.post("https://api.kounta.com/v1/companies/5678/orders.json",
    {
        headers: { 
            'Authorization': 'Bearer AccessTokenHere123123123' // Requires real token via .env variable
        },
        data : data
    }).then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
});

module.exports = router;
