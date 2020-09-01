// MODULES
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import HomePage from "./pages/home"
import NotFound from "./pages/404"
import Category from "./pages/category"
import Product from "./pages/product"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/categories"]}>
            <HomePage />
          </Route>
          <Route exact path="/category/:id">
            <Category />
          </Route>
          <Route exact path="/product/:id">
            <Product />
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
