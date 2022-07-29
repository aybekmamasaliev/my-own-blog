import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Catalog.module.css";

const Catalog=(props)=>{
    return(
        <div className={styles.catalog}>
            <h1>Catalog page</h1>
            <p>{props.userName}</p>
            <Outlet/>
        </div>
    );
}

export default Catalog;