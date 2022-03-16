import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart=(props)=>{

    return <Modal onDismiss={props.onDismiss}>
    
    <div className={classes.footer}>
    <div className={classes.total}>
        <span>Total Amount :</span>
        <span>2</span>
        </div>
        <div className={classes.actions}>
        <button>Proceed</button>
        <button onClick={props.onDismiss}>Close</button>

        </div>

    </div>
       

    </Modal>
}

export default Cart;