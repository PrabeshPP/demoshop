import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton=(props)=>{
    return  (<button  className={classes.button} onClick={props.onClick} >
    <span className={classes.cartIcon}>
    <CartIcon/>
    </span>
    <span className={classes.badge}>5</span>
       </button>)
 
}

export default CartButton;