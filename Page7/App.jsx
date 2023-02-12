import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|results)">
          <Results {...resultsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const resultsData = {
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "Results",
    group27: "/img/group-27@2x.png",
    spanText3: <React.Fragment>Based on this quiz, here are the best ways to help monarch butterflies in your area<br /></React.Fragment>,
    spanText4: "(This is sample data for this prototype)",
    growNativePlantsLikeMilkweed: <React.Fragment><br />Grow native plants like milkweed</React.Fragment>,
    spanText5: <React.Fragment>Common milkweed<br />Whorled milkweed seed<br /></React.Fragment>,
    spanText6: <React.Fragment><br /><br /><br />These milkweed are native to your area. Plant these in clusters under sunny areas. Make sure the soil is light, well-drained and seeds are a quarter-inch deep.</React.Fragment>,
    milkweedRemovebgPreview1: "/img/milkweed-removebg-preview-1@2x.png",
    whorledMilkweedAsclepiasVerticillat: "/img/whorled-milkweed-asclepias-verticillata-ftimg-800x480-removebg-p@2x.png",
    spanText7: <React.Fragment><br />Other options<br /><br /></React.Fragment>,
    spanText8: "Plant some nearby ",
    spanText9: "nectar-rich plants",
    spanText10: <React.Fragment> for butterflies to feed off of.<br /><br />When you are plant shopping, ask your local plant nursery if they treat the plants with </React.Fragment>,
    spanText11: "pesticides",
    spanText12: ". You want to avoid purchasing these plants to ",
    spanText13: "avoid spreading these toxins to monarchs.",
    spanText14: "",
};

