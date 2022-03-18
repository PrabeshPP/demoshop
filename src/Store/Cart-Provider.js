import CartContext from "./Cart-context";
import { useReducer } from "react";
const defaultState={
    items:[],
    totalAmount:0,
}


const cartReducer=(state,action)=>{
    return defaultState;
}



const CartProvider=(props)=>{
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultState);

    const AddItemHandler=(item)=>{

    }

    const RemoveItemHandler=(item)=>{

    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItemhandler:AddItemHandler,
        removeItemHandler:RemoveItemHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider;