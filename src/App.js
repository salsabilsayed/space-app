import React, {Suspense} from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";


const Destination = React.lazy(()=> import('./pages/destination/Destination'));
const Crew = React.lazy(()=> import('./pages/crew/Crew'));

const Technology = React.lazy(()=> import('./pages/technology/Technology'));


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </React.Fragment>
  );
}

export default App;
