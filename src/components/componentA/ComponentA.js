import React from "react";
import styles from "./ComponentA.module.css"
const ComponentA=()=>{

    console.log(styles);
    return(
        <h1 className={styles.myText}>ComponentA</h1>
    )

}

export default ComponentA;