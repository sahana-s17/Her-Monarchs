import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop3 from "./components/Desktop3";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-3)">
          <Desktop3
            question15="2/5"
            whereAreYouLocated="Where are you located?"
            currentlySupportsInNewJersey="*currently supports in New Jersey"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
