import React from "react";
import CartButton from "../Cart/CartButton";
import classes from "./Header.module.css";
import HeaderName from "./Header_Name";

const Header=()=>{
    return(
        <div className={classes.header}>
        <HeaderName/>
        <CartButton/>

        </div>
    )
}

export default Header;