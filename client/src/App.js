import React, { Component } from "react";
import logo from "./logo.svg";
import SearchBooks from "./Components/SearchBooks";
import SavedBooks from "./Components/SavedBooks";
import NoMatch from "./Components/NoMatch";
import Nav from "./Components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return(
    <Router>
    <div>
    <Nav />
      <Switch>
        <Route exact path={["/", "/books"]} component={SearchBooks} />
        <Route exact path="/SavedBooks" component={SavedBooks} />
        <Route component={NoMatch} />
        </Switch>
    </div>
    </Router>
  );
}


export default App;
