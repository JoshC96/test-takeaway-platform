## Delicia Takeaway React + NodeJS Server

Folder Structure:

Server initialized in server.js, routes to communicate with Craft API and Stripe found in routes/, controller for Axios get functions are found in apiController/

React app lives in client/ directory.


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

Login Details: 
Delicia
20GAk7X01Roc


## Sass commands

Sass will run when npm run start has been run - found in package.json


## Server information found in server.js

cd to delicia-takeaway then run:

``` npm run start ```

This will run the server + build and serve the React app
