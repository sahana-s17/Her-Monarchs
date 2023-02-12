import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home-screen)">
          <HomeScreen {...homeScreenData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const homeScreenData = {
  spanText1: "Monarch butterflies are currently ",
  spanText2: "endangered",
  spanText3: ". Why do we need to protect them? These species, along with many other land animals, ",
  spanText4: "account for 80% of land plants pollination around the world.",
  spanText5: " You can help save these monarchs using resources within this website, including our quick 1 minute quiz.",
  group26: "/img/group-26.png",
  group27: "/img/group-27-1@2x.png",
  aboutMonarchButterflies: "About Monarch Butterflies",
  spanText6: "Appearance:",
  spanText7: " The wings of adult monarch butterflies are two pairs of vivid orange-red with black veins and white patches along the borders. The veins of the males' wings have distinctive black spots that make them stand out from the females.",
  spanText8: "Migration Patterns:",
  spanText9: " Every fall, monarch butterflies travel from their summer breeding grounds to their overwintering locations. They travel up to 2,500 miles from US and Canada to central Mexico where they hibernate for the winter.",
  spanText10: "Lifespan:",
  spanText11: " Monarchs live up to usually 2-6 weeks. Their lifespan is usually short because they rely on the nutrients they stored when they were caterpillars to live.",
  title: "Contribution to Environment",
  spanText12: "The monarch butterfly migration across North America is invaluable for ",
  spanText13: "many ecosystems to survive because they pollinate!",
  spanText14: " It is because of these butterflies and many others that we have many ",
  spanText15: "flowers",
  spanText16: " and ",
  spanText17: "foods",
  spanText18: <React.Fragment> such as blueberries and squash. <br /><br />If the monarch butterfly population continue to decline, it impacts the various diverse ecosystems and even our food systems too. They play an important role by pollinating 75% of the world’s flowering plants and many food crops</React.Fragment>,
  sightings: "Sightings",
  mapIsUpdatedBasedOnUserInput: "*map is updated based on user input",
  overlapGroup: "/img/img-7430-1.png",
  monarchButterfliesRemovebgPreview28: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
  monarchButterfliesRemovebgPreview211: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
  monarchButterfliesRemovebgPreview212: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
  monarchButterfliesRemovebgPreview26: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
  monarchButterfliesRemovebgPreview29: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
  monarchButterfliesRemovebgPreview27: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
  monarchButterfliesRemovebgPreview22: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
  monarchButterfliesRemovebgPreview25: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
  monarchButterfliesRemovebgPreview24: "/img/monarch-butterflies-removebg-preview-2-11@2x.png",
};

