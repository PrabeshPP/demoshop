import React,{useContext} from "react";
import CartContext from "../../Store/Cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
   
    const totalAmount=cartCtx.totalAmount.toFixed(2);
    return <Modal onDismiss={props.onDismiss}>

    <div className={classes.footer}>
    <div className={classes.total}>
        <span>Total Amount :</span>
        <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
        <button>Proceed</button>
        <button onClick={props.onDismiss}>Close</button>

        </div>

    </div>
       

    </Modal>
}

export default Cart;