import React from 'react';
import Home from "./Pages/Home"
import NoMatch from "./Pages/NoMatch"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="*" component={NoMatch}/>
      </Switch>
    </Router>
  );
}
export default App;