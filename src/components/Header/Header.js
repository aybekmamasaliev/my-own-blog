import React from "react";
import styles from "./Header.module.css"

const Header =()=>{
    return(
        <div className={styles.header}>
            <ul> 
                <li><a href="/">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/catalog">Catalog</a></li>
            </ul>
        </div>
    );
}

export default Header;