import React from "react";

const Task4 = (props) => {
  return (
    <div className="w3-card w3-margin w3-margin-top">
      <img
        src={props.url}
        style={{ width: "100%" }}
      />
      <div className="w3-container w3-white">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>
            {props.selfinfo}
        </p>
      </div>
    </div>
  );
};

export default Task4;
