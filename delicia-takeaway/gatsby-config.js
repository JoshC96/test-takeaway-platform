module.exports = {
  // PROXY IS FOR API ROUTES SO THEY AREN'T TREATED AS STATIC ASSETS
  // proxy: {
  //   prefix: "/users",
  //   url: "http://localhost:8000", // UPDATE THIS URL ON DEPLOYMENT
  // },
  siteMetadata: {
    title: `Delicia Acai`,
    description: `The home of Delicia Acai & Protein Bar in Australia!`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'CraftAPI',
        fieldName: 'craftAPI',
        url: 'http://takeaway.nightfallstudios.com.au/api',
        refetchInterval: 300, // WILL RETRIEVE NEW DATA EVERY 5 MINUTES
        batch: true,
      }
    },
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: 'config/gatsby-express.json',
      }
    }
  ],
}
