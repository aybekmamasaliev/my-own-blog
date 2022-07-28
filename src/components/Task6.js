import React from "react";
import { populars } from "../constants";

const Task6 = () => {
  return (
    <>
      {populars.map((item) => ( 
        <li className="w3-padding-16" key={item.id}>
          <img
            src={item.place}
            alt="Image"
            className="w3-left w3-margin-right"
            style={{ width: 50 }}
          />
            <span className="w3-large">{item.pictureName}</span>
            <br />
            <span>{item.opis}</span>
        </li>
      ))}
    </>
  );
};

export default Task6;
