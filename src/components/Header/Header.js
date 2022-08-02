import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"


const Header =()=>{

    const setActive =()=>{}

    return(
        <div className={styles.header}>
            <ul> 
                <li><NavLink className={({isActive})=>isActive ? "active" : ""} to="/" >Main</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
                <li><NavLink to="/catalog">Catalog</NavLink></li>
                <li><NavLink to="/catalog/iphone">Iphone</NavLink></li>
                <li><NavLink to="/catalog/macBook">MacBook</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;