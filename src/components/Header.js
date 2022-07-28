import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="w3-content" style={{ maxWidth: 1400 }}>
        <header className="w3-container w3-center w3-padding-32">
          <h1>
            <b>{props.title}</b>
          </h1>
          <p>
            {props.texth}
            <span className="w3-tag">{props.sp}</span>
          </p>
        </header>
        <br />
      </div>
    </>
  );
};

export default Header;
