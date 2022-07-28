import React, { useState } from "react";
import { tags } from "../constants";

const margin = {
  marginRight: "5px",
};

const Tag = (props) => {

  const [active, setActive] = useState(false);
  if (active) {
  }
  const activated = () => {
    setActive("w3-black");
    props.checkActive();
  };

  return (
    <span
      onClick={activated}
      className={`w3-tag w3-margin-bottom ${active}`}
      style={margin}
    >
      {props.name}
    </span>
  );
};

const Task7 = () => {
  const [tag, setTag] = useState("");
  const checkActive = () => {
    setTag("work");
  };

  const removeActive = () => {
    const elements = document.querySelectorAll(".w3-tag");

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("w3-black")) {
        elements[i].classList.remove("w3-black");
        elements[i].classList.add("w3-light-grey");
        elements[i].classList.add("w3-small");
      }
    }
  };

  const activated = (e) => {
    removeActive();
    e.target.classList.add("w3-black");
    e.target.classList.remove("w3-light-grey");
    e.target.classList.remove("w3-small");
  };

  const TagsArray = tags.map((item) => (
    <Tag checkActive={checkActive} name={item} />
  ));

  return (
    <>
      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4>Tags</h4>
        </div>
        <div className="w3-container w3-white">
          <p>
            {tags.map((item) => (
              <span
                onClick={activated}
                className="w3-tag w3-margin-bottom w3-light-grey w3-small"
                style={margin}
              >
                {item}
              </span>
            ))}

            {/* {TagsArray} */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Task7;
