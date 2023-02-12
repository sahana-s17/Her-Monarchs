import React from "react";
import "./X45.css";

function X45(props) {
  const { chooseYourSoilType, question15, place, moist } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x4-5 screen">
        <div className="overlap-group3">
          <div className="choose-your-soil-type">{chooseYourSoilType}</div>
          <div className="overlap-group2">
            <div className="question-15">{question15}</div>
            <img className="vector" src="/img/vector-4.svg" alt="Vector" />
          </div>
        </div>
        <div className="flex-row">
          <div className="overlap-group">
            <h1 className="place inter-normal-white-64px">{place}</h1>
          </div>
          <div className="flex-col">
            <div className="overlap-group1">
              <div className="moist inter-normal-white-64px">{moist}</div>
            </div>
            <img className="vector-1" src="/img/vector-9.svg" alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default X45;
