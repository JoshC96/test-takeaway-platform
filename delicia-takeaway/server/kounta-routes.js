const request = require('request');
const kounta = require("./kounta-helper");

module.exports = function (app) {

    app.post("/api/order", function (req, res) {
        request(kounta.buildOrderOptions(req), function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            res.json(response.body);
        });
    });

    app.post("/api/notification", function (req, res) {
        request(kounta.buildNotificationOptions(req), function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            res.json(response.body);
        });
    });
};
