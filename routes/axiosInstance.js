const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: "http://takeaway.nightfallstudios.com.au/",
    timeout: 3000,
    crossdomain: true,
    headers: {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers': 'Content-Type, Authorization'}
});

module.exports = axiosInstance;