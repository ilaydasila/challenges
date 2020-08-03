import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "./LandingPage";
import { AppLayout } from "./AppLayout";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <ProtectedRoute exact path='/app' component={AppLayout} />
        <Route path='*' component={() => "404 NOT FOUND"}></Route>
      </Switch>
    </div>
  );
}

export default App;
