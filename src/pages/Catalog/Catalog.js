import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Catalog.module.css";

const Catalog=(props)=>{
    return(
        <div className={styles.catalog}>
            <h1>Catalog page</h1>
            <p>{props.userName}</p>
            {/* <ul >
                <li><Link to="/product/1">Iphone 13 pro</Link></li>
                <li><Link to="/product/2">Iphone 13 pro max</Link></li>
                <li><Link to="/product/3">Iphone 13</Link></li>
                <li><Link to="/product/4">Iphone 12</Link></li>
            </ul> */}
            <Outlet/>
        </div>
    );
}

export default Catalog;