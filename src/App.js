import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import "./helpers/icons";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Router>
          <Switch>
            <Route exact path="/about" component = {About}/>
            <Route path="/" component={ Home } />  
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
