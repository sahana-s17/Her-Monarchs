import React from "react";
import "./X35.css";

function X35(props) {
  const { question15, areDeerPrevalentInYourArea, title, place } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x3-5 screen">
        <div className="overlap-group2">
          <div className="question-15">{question15}</div>
          <img className="vector" src="/img/vector-4.svg" alt="Vector" />
        </div>
        <p className="are-deer-prevalent-in-your-area">{areDeerPrevalentInYourArea}</p>
        <div className="overlap-group-container">
          <div className="overlap-group">
            <h1 className="title inter-normal-white-64px">{title}</h1>
          </div>
          <div className="overlap-group1">
            <div className="place inter-normal-white-64px">{place}</div>
          </div>
        </div>
        <img className="vector-1" src="/img/vector-7.svg" alt="Vector" />
      </div>
    </div>
  );
}

export default X35;
