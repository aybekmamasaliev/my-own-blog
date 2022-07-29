import React from "react";
import styles from "./Main.module.css";

const Main=(props)=>{
    return(
        <div className={styles.main}>
            <h1>Main page</h1>
            <p>{props.userName}</p>
        </div>
    );
}

export default Main;