import React from "react";
import CartButton from "../Cart/CartButton";
import classes from "./Header.module.css";
import HeaderName from "./Header_Name";

const Header=(props)=>{
    return(
        <div className={classes.header}>
        <HeaderName/>
        <CartButton onClick={props.onShow}/>

        </div>
    )
}

export default Header;