import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";

import OneMovie from "./pages/OneMovie";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App=()=> {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route  path="/onemovie/:id" component={OneMovie} /> 

        <Route component={NotFound} />
      </Switch>
  </Router>
  );
}

export default App;

