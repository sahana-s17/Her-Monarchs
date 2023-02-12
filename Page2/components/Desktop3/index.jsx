import React from "react";
import "./Desktop3.css";

function Desktop3(props) {
  const { question15, whereAreYouLocated, currentlySupportsInNewJersey } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-3 screen">
        <h1 className="question-15">{question15}</h1>
        <div className="where-are-you-located">{whereAreYouLocated}</div>
        <p className="currently-supports-in-new-jersey">{currentlySupportsInNewJersey}</p>
      </div>
    </div>
  );
}

export default Desktop3;
