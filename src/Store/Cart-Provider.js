import CartContext from "./Cart-context";

const CartProvider=(props)=>{
    const cartContext={
        item:[],
        totalAmount:0,
        addItemhandler:(item)=>{},
        removeItemHandler:(id)=>{}
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider;