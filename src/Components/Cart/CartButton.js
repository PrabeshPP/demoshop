import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../../Store/Cart-context";

const CartButton=(props)=>{
    const cartCtx=useContext(CartContext);
    const total=cartCtx.items.length;
    return  (<button  className={classes.button} onClick={props.onClick} >
    <span className={classes.cartIcon}>
    <CartIcon/>
    </span>
    <span className={classes.badge}>{total}</span>
       </button>)
 
}

export default CartButton;