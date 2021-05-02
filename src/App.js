import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EmailContact from './components/EmailContact/EmailContact';
import Home from './components/Home/Home';
import MoreProjects from './components/MoreProjects/MoreProjects';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Navbar/>
            <Home/>
        </Route>
        <Route path="/moreProjects">
            <Navbar/>
            <MoreProjects/>
        </Route>
        <Route path="/contactMe">
            <Navbar/>
            <EmailContact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
