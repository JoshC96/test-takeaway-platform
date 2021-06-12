## Delicia Takeaway React + NodeJS Server

Folder Structure:

Server initialized in server.js, routes to communicate with Craft API and Stripe found in routes/, controller for Axios get functions are found in apiController/

The server has Cron jobs that will run every minute to fetch data from the Craft API. This interval can be changed but 1 minute seems to be good for dev time. When fetching the server will write to shop_data and store the data as JSON object in a file so there's no API wait time for the user.

If the fetch is unsuccessul the server won't write to these files. There should always be data to serve.

React app lives in client/ directory. The Cart component in the components folder controls the products and customer information. When the user checks out, the data from the cart is loaded into Stripe. 

We still require an API Access Plan for Kounta before we can start making test requests for the notification.


## React + React Router

The react app uses React Router to handle page routes, below is the App.js routing system:

```
function App() {
  // INITIALIZE CART ON APP LOAD
  CartFunc.initCart();

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/categories"]}>
            <HomePage />
          </Route>
          <Route exact path="/categories/:id">
            <Category />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

When the app routes to "/" or "/categories" the HomePage will be loaded, when an ID is provided with "categories" or "product" then the respective component will be loaded. 

When a route doesn't exist the user sees 404 page, this is also great for security as the proxy for the server requests is harder to find. 

The Category page will filter products by STORE - if the store has no products, it will display as empty

## Craft Details

### API routes are set up to make API requests to this url:
http://takeaway.nightfallstudios.com.au/

To add a new product, login and find "Entries" on the left side. This is where almost everything should be done. Add a new product by going to "Products" in the second left-side menu, and selecting the red "New Entry" button on the right side.

When adding a new product you'll need to enter at least a title, price, and menu category. Otherwise it won't show correctly. Add ons are for things like milk type, syrup, and sizes for drinks.

Selecting the correct "Site" (store) is important.  At the top of the second left-side menu is a dropdown that says "Default" click this to see the stores. Default has some products already added, this store is used for demo purposes. 

Products are set to save only for the stores they are created in. For example, if Henley Beach create a new product, it won't show in Modbury's list of products. 

To add a new store/state the client will need to speak to us.

## Sass commands

Sass will run when npm run start has been run - found in package.json

Sass folder is ./client/styles


## Server information found in server.js

cd to delicia-takeaway then run:

``` npm run start ```

This will run the server + build and serve the React app
