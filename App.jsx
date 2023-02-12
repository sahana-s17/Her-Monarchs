import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop2 from "./components/Desktop2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-2)">
          <Desktop2
            question15="1/5"
            haveYouSpottedMon="Have you spotted monarch butterflies in your area?"
            yes="yes"
            place="no"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
