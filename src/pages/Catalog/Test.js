import React from "react";
import style from "./Test.module.css";

const Test = (props) => {
  return (
    <div className={style.cart}>
      <img className={style.img} src={props.img} alt="img"/>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button className={style.busket}>Add to Bag</button>
      </div>
    </div>
  );
};

export default Test;
