const gatsbyExpress = require('gatsby-plugin-express');
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(gatsbyExpress('config/gatsby-express.json', {
  publicDir: 'public/',

  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true,
}));

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});