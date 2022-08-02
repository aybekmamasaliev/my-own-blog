
import React from "react";
import { useParams } from "react-router-dom";
import style from "./Product.module.css";

const Product =()=>{

const x =useParams().name

  return (
    <>
    <div className={style.map}>
        <h1>cdfsvfdeas {x}</h1>
    </div>
    </>
  );
}

export default Product;