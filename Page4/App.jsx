import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X45 from "./components/X45";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|4-5)">
          <X45 chooseYourSoilType="Choose your soil type:" question15="4/5" place="Dry" moist="Moist" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
