import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X55 from "./components/X55";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|5-5)">
          <X55 doesYourAreaHave="Does your area have access to plenty of sunlight?" question15="5/5" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
