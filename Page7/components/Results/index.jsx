import React from "react";
import "./Results.css";

function Results(props) {
  const {
    spanText1,
    spanText2,
    group27,
    spanText3,
    spanText4,
    growNativePlantsLikeMilkweed,
    spanText5,
    spanText6,
    milkweedRemovebgPreview1,
    whorledMilkweedAsclepiasVerticillat,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="results inter-normal-black-64px screen">
        <h1 className="results-1">
          <span className="inter-normal-black-64px">{spanText1}</span>
          <span className="span-1">{spanText2}</span>
        </h1>
        <div className="overlap-group">
          <img className="group-27" src={group27} alt="Group 27" />
          <img className="vector" src="/img/vector.svg" alt="Vector" />
          <p className="based-on-this-quiz">
            <span className="inter-normal-sepia-black-48px">{spanText3}</span>
            <span className="span-2">{spanText4}</span>
          </p>
          <p className="grow-native-plants-like-milkweed inter-normal-black-64px">{growNativePlantsLikeMilkweed}</p>
          <p className="common-milkweed-w inter-normal-sepia-black-52px">
            <span className="inter-normal-sepia-black-52px">{spanText5}</span>
            <span className="inter-normal-sepia-black-48px">{spanText6}</span>
          </p>
          <img
            className="milkweed-removebg-preview-1"
            src={milkweedRemovebgPreview1}
            alt="milkweed-removebg-preview 1"
          />
          <img
            className="whorled-milkweed-asc"
            src={whorledMilkweedAsclepiasVerticillat}
            alt="whorled-milkweed-asclepias-verticillata-ftimg-800x480-removebg-preview 1"
          />
        </div>
        <p className="other-options-plant">
          <span className="inter-normal-black-64px">{spanText7}</span>
          <span className="inter-normal-black-48px">{spanText8}</span>
          <span className="inter-bold-black-48px">{spanText9}</span>
          <span className="inter-normal-black-48px">{spanText10}</span>
          <span className="inter-bold-black-48px">{spanText11}</span>
          <span className="inter-normal-black-48px">{spanText12}</span>
          <span className="inter-bold-black-48px">{spanText13}</span>
          <span className="inter-normal-black-48px">{spanText14}</span>
        </p>
      </div>
    </div>
  );
}

export default Results;
