import React,{useState} from "react";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/Cart-Provider";
import Shop from "./Components/Items/Shop";


function App() {
  const[cartShow,setCartShown]=useState(false);

  const showCartHandler=()=>{
    setCartShown(true);
  }

  const dismissCartHandler=()=>{
    setCartShown(false);
  }

  return (
   <CartProvider>
   {cartShow && <Cart onDismiss={dismissCartHandler}/>}
   <Header onShow={showCartHandler}/>
   <Shop/>

   </CartProvider>
  );
}

export default App;
