import React from "react";
import classes from "./Modal.module.css"

const BackDrop=(props)=>{
    return <div className={classes.backdrop} ></div>

}

const CartModal=(props)=>{
    return <div className={classes.cartModal}>

    </div>
}

const Modal=(props)=>{
    return <React.Fragment>
        <BackDrop/>
        <CartModal/>
    </React.Fragment>
}

export default Modal;