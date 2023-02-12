import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop from "./components/Desktop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop)">
          <Desktop>
            <br />
            Generating your results...
          </Desktop>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
