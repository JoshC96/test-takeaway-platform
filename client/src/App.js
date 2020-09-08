// MODULES
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartFunc from "./functions/cart-functions.js"
import CartController from "./components/cart"

// PAGES
import HomePage from "./pages/home"
import NotFound from "./pages/404"
import Category from "./pages/category"
import Product from "./pages/product"
import Cart from "./pages/cart"
import Checkout from "./pages/checkout"


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

export default App;
