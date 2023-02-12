import React from "react";
import "./X55.css";

function X55(props) {
  const { doesYourAreaHave, question15 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x5-5 screen">
        <div className="overlap-group">
          <h1 className="does-your-area-have">{doesYourAreaHave}</h1>
          <div className="question-15">{question15}</div>
          <img className="vector" src="/img/vector-4.svg" alt="Vector" />
        </div>
        <div className="flex-row">
          <img className="rectangle-3" src="/img/rectangle-34.svg" alt="Rectangle 34" />
          <img className="rectangle-3" src="/img/rectangle-34.svg" alt="Rectangle 35" />
        </div>
        <img className="vector-1" src="/img/vector-9.svg" alt="Vector" />
      </div>
    </div>
  );
}

export default X55;
