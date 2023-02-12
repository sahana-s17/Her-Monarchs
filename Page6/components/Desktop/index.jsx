import React from "react";
import "./Desktop.css";

function Desktop(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop screen">
        <h1 className="generating-your-results">{children}</h1>
      </div>
    </div>
  );
}

export default Desktop;
