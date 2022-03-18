import React from "react";
import classes from "./Modal.module.css";
import ReactDom from 'react-dom';



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



const portalElem=document.getElementById('div1');
const Modal=(props)=>{
    return <React.Fragment>
        {ReactDom.createPortal(<BackDrop onDismiss={props.onDismiss}/>,portalElem)}
        {ReactDom.createPortal(<CartModal onDismiss={props.onDismiss}>{props.children}</CartModal>,portalElem)}
    </React.Fragment>
}

export default Modal;