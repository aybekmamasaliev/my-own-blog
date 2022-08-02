import React from "react";
import { Link } from "react-router-dom";
import { iphones } from "../../../constants/iphones";
import style from "./Iphones.module.css";
import Test from "../Test";

const Iphones = () => {
  return (
    <div className={style.map}>
      {iphones.map((item) => (
        <Link className={style.link} to={`/product/${item.id}`}>
          <Test
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
          />
        </Link>
        
      ))}
    </div>
    
  );
};
export default Iphones;
