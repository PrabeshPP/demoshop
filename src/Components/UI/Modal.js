import React from "react";
import classes from "./Modal.module.css"

const BackDrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onDismiss} ></div>

}

const CartModal=(props)=>{
    return <div className={classes.cartModal} >
        <div className={classes.content}>
        {props.children}
        </div>
    </div>
}

const Modal=(props)=>{
    return <React.Fragment>
        <BackDrop onDismiss={props.onDismiss}/>
        <CartModal onDismiss={props.onDismiss}>{props.children}</CartModal>
    </React.Fragment>
}

export default Modal;