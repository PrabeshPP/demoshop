import React from "react";
import classes from "./Header.module.css";
import HeaderName from "./Header_Name";

const Header=()=>{
    return(
        <div className={classes.header}>
        <HeaderName/>

        </div>
    )
}

export default Header;