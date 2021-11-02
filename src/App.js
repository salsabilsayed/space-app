import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/technology/Technology'


function App() {
  return (
    <React.Fragment>
      <Navbar />
      
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/crew">
          <Crew />
        </Route>
        <Route>
          <Technology path="/technology" />
        </Route>
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
