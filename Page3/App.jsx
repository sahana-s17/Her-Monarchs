import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X35 from "./components/X35";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|3-5)">
          <X35 question15="3/5" areDeerPrevalentInYourArea="Are deer prevalent in your area?" title="Yes" place="No" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
