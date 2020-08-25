## Delicia Takeaway Gatsby + Craft GraphQL

Gatsby run develop environment on localhost:8000:

```gatsby develop```

Create a production build

```gatsby build```

Serve the production build locally

```gatsby serve```


Quick start docs:
https://www.gatsbyjs.com/docs/quick-start/


## Craft CMS + GraphQL useful information:

https://dimitr.im/gatsby-craft-cms

## Sass commands

Sass run command from ./delicia-takeaway directory:

```sass --watch styles:src/stylesheets```


## Craft Details

GraphQL is set up to make API requests to this url:
# http://takeaway.nightfallstudios.com.au/admin/graphql/schemas

Login Details: 
admin
f7y^$%XM8h7f


Configuration found in ./delicia-takeaway/gatsby-config.js

```{
    resolve: `gatsby-source-graphql`,
    options: {
    typeName: 'CraftAPI',
    fieldName: 'craftAPI',
    url: 'http://takeaway.nightfallstudios.com.au/api'
    }
}```