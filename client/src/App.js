import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Dvis from "./views/Data Visualization/Home"
import Comptool from "./views/Comparison Tool/Home"
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Data Visualization" component={Dvis} />
        <Route exact path="/Comparison Tool" component={Comptool} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
