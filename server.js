require('dotenv').config()
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use(express.static("client/build"));
// const root = require('path').join(__dirname, 'client', 'build')
// app.use(express.static(root));
// app.get("/", (req, res) => {
//     res.sendFile('index.html', { root });
// })


// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
