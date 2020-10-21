/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

const allEntriesQuery = `
{
    craftAPI {
        entries {
            ...on CraftAPI_categories_categories_Entry {
                id
                uri
                title
                image {
                    ...on CraftAPI_assets_Asset {
                        id
                        url
                    }
                }
            }
            ...on CraftAPI_products_products_Entry {
                id
                uri
                title
                description
                price
                image {
                    ...on CraftAPI_assets_Asset {
                        id
                        url
                    }
                }
                menuCategory {
                    id
                    title
                }
            }
        }
    }
}
`;

exports.createPages = ({graphql, actions: {createPage}}) => {
  return graphql(allEntriesQuery).then(({errors, data: {craftAPI: {entries}}}) => {
    if (errors) throw new errors;
    return entries.map((entry) => {
        if(entry.id !== "" && typeof entry.id !== "undefined"){
            const componentPath = entry.uri.includes("categories")  ? path.resolve('./src/pages/category.js') : path.resolve('./src/pages/product.js')
            createPage({
                path: entry.uri,
                component: componentPath,
                context: {
                    item: entry
                  }
            })
        }
        return null
    });
  });
};