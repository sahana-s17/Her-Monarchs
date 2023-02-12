import React from "react";
import "./Desktop2.css";

function Desktop2(props) {
  const { question15, haveYouSpottedMon, yes, place } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-2 screen">
        <h1 className="question-15">{question15}</h1>
        <p className="have-you-spotted-mon">{haveYouSpottedMon}</p>
        <div className="overlap-group-container">
          <div className="overlap-group">
            <img className="rectangle-29" src="/img/rectangle-28.svg" alt="Rectangle 29" />
            <div className="yes inter-normal-white-64px">{yes}</div>
          </div>
          <div className="overlap-group1">
            <div className="place inter-normal-white-64px">{place}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop2;
