import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/commontary">
            <Header />
            <h1>Commontary One</h1>
          </Route>

          <Route path="/main">
            <Header />
            <h1>Main . HTML</h1>
          </Route>

          <Route path="/">
           <Header />
           <h1>Home!</h1>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
