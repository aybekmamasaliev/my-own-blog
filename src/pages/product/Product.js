
import React from "react";
import { useParams } from "react-router-dom";
import style from "./Product.module.css";
import { iphones } from "../../constants/iphones";

const Product =()=>{

const params = useParams();

const product = iphones.find(item=>item.id === +params.id)

console.log(product);

  return (
    <>
    <div className={style.container}>
      <div>
          <img src={product.img} alt="" />
      </div>
      <div className={style.info}>
      <h1>Here is a phone :  {params.id} </h1>
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
        <h4>{product.description}</h4>
      </div>

    </div>
    </>
  );
}

export default Product;