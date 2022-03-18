import CartContext from "./Cart-context";
import { useReducer } from "react";
const defaultState={
    items:[],
    totalAmount:0,
}


const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
        const updatedTotalAmount=state.totalAmount+action.item.price;
        const existingItemIndex=state.items.findIndex((item)=>item.id==action.item.id);
        
        const updateItems=state.items.concat(action.item);
        

        return {items:updateItems,totalAmount:updatedTotalAmount};
    }
    return defaultState;
}



const CartProvider=(props)=>{
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultState);

    const AddItemHandler=(item)=>{
        dispatchCartAction({type:"ADD",item:item})

    }

    const RemoveItemHandler=(id)=>{
        dispatchCartAction({type:"REMOVE",id:id})

    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:AddItemHandler,
        removeItem:RemoveItemHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider;