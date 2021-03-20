import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Commontary from "./Commontary";
import Stocks from "./Stocks";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [ searchTerm, setSearchTerm ] = useState('');



  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  return (
    <Router>
      <div className="app">
        <Switch>
          
          {/* COMMONTARY */}
          <Route path="/commontary">
            <Header />
            <Commontary />
          </Route>

          {/* STOCKS */}
          <Route path="/stocks">
            <Header />
            <Stocks />
          </Route>

          {/* HOME */}
          <Route 
            path="/"
            term={ searchTerm }
            searchKeyword={ searchHandler }>
           <Header />
           <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
