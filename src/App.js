import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Commontary from "./Commontary";
import Stocks from "./Stocks";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/commontary">
            <Header />
            <Commontary />
          </Route>

          <Route path="/stocks">
            <Header />
            <Stocks />
          </Route>

          <Route path="/">
           <Header />
           <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
