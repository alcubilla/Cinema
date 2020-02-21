import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Home"
import NotFound from "./components/NotFound"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App=()=> {
  return (
    <Router>
    <Header />
 
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route component={NotFound} />
      </Switch>
 
  </Router>
  );
}

export default App;

