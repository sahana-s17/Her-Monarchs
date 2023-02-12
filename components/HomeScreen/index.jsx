import React from "react";
import "./HomeScreen.css";

function HomeScreen(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    group26,
    group27,
    aboutMonarchButterflies,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    title,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    sightings,
    mapIsUpdatedBasedOnUserInput,
    overlapGroup,
    monarchButterfliesRemovebgPreview28,
    monarchButterfliesRemovebgPreview211,
    monarchButterfliesRemovebgPreview212,
    monarchButterfliesRemovebgPreview26,
    monarchButterfliesRemovebgPreview29,
    monarchButterfliesRemovebgPreview27,
    monarchButterfliesRemovebgPreview22,
    monarchButterfliesRemovebgPreview25,
    monarchButterfliesRemovebgPreview24,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-screen screen">
        <div className="overlap-group3">
          <p className="monarch-butterflies inter-normal-sepia-black-48px">
            <span className="inter-normal-sepia-black-48px">{spanText1}</span>
            <span className="inter-bold-sepia-black-48px">{spanText2}</span>
            <span className="inter-normal-sepia-black-48px">{spanText3}</span>
            <span className="inter-bold-sepia-black-48px">{spanText4}</span>
            <span className="inter-normal-sepia-black-48px">{spanText5}</span>
          </p>
          <img className="group-26" src={group26} alt="Group 26" />
        </div>
        <img className="group-27" src={group27} alt="Group 27" />
        <div className="overlap-group1">
          <div className="about-monarch-butterflies inter-normal-black-64px">{aboutMonarchButterflies}</div>
          <img className="vector" src="/img/vector-2.svg" alt="Vector" />
        </div>
        <p className="appearance-the-wing inter-bold-black-40px">
          <span className="inter-bold-black-40px">{spanText6}</span>
          <span className="inter-normal-black-40px">{spanText7}</span>
        </p>
        <p className="migration-patterns inter-bold-black-40px">
          <span className="inter-bold-black-40px">{spanText8}</span>
          <span className="inter-normal-black-40px">{spanText9}</span>
        </p>
        <div className="overlap-group4">
          <img className="vector-1" src="/img/vector-1.svg" alt="Vector" />
          <p className="lifespan-monarchs-l inter-bold-black-40px">
            <span className="inter-bold-black-40px">{spanText10}</span>
            <span className="inter-normal-black-40px">{spanText11}</span>
          </p>
        </div>
        <h1 className="title inter-normal-black-64px">{title}</h1>
        <p className="the-monarch-butterfl inter-normal-black-40px">
          <span className="inter-normal-black-40px">{spanText12}</span>
          <span className="inter-bold-black-40px">{spanText13}</span>
          <span className="inter-normal-black-40px">{spanText14}</span>
          <span className="inter-bold-black-40px">{spanText15}</span>
          <span className="inter-normal-black-40px">{spanText16}</span>
          <span className="inter-bold-black-40px">{spanText17}</span>
          <span className="inter-normal-black-40px">{spanText18}</span>
        </p>
        <div className="overlap-group2">
          <div className="sightings inter-normal-black-64px">{sightings}</div>
          <p className="map-is-updated-based-on-user-input inter-normal-black-40px">{mapIsUpdatedBasedOnUserInput}</p>
          <img className="vector-2" src="/img/vector-3.svg" alt="Vector" />
        </div>
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="flex-row">
            <img
              className="monarch-butterflies-removebg-preview-2-8"
              src={monarchButterfliesRemovebgPreview28}
              alt="monarch-butterflies-removebg-preview-2 8"
            />
            <div className="flex-col">
              <img
                className="monarch-butterflies-1"
                src={monarchButterfliesRemovebgPreview211}
                alt="monarch-butterflies-removebg-preview-2 11"
              />
              <img
                className="monarch-butterflies-2"
                src={monarchButterfliesRemovebgPreview212}
                alt="monarch-butterflies-removebg-preview-2 10"
              />
              <div className="monarch-butterflies-3">
                <img
                  className="monarch-butterflies-removebg-preview-2-6"
                  src={monarchButterfliesRemovebgPreview26}
                  alt="monarch-butterflies-removebg-preview-2 6"
                />
                <img
                  className="monarch-butterflies-removebg-preview-2-9"
                  src={monarchButterfliesRemovebgPreview29}
                  alt="monarch-butterflies-removebg-preview-2 9"
                />
              </div>
              <img
                className="monarch-butterflies-removebg-preview-2-7"
                src={monarchButterfliesRemovebgPreview27}
                alt="monarch-butterflies-removebg-preview-2 7"
              />
            </div>
            <img
              className="monarch-butterflies-removebg-preview-2-2"
              src={monarchButterfliesRemovebgPreview22}
              alt="monarch-butterflies-removebg-preview-2 2"
            />
          </div>
          <img
            className="monarch-butterflies-removebg-preview-2-5"
            src={monarchButterfliesRemovebgPreview25}
            alt="monarch-butterflies-removebg-preview-2 5"
          />
          <img
            className="monarch-butterflies-removebg-preview-2-4"
            src={monarchButterfliesRemovebgPreview24}
            alt="monarch-butterflies-removebg-preview-2 4"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
