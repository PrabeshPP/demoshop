import React,{useState} from "react";
import Header from "./Components/Header/Header";
import Meal from "./Components/Items/Meal";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/Cart-Provider";


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
   <Meal/>

   </CartProvider>
  );
}

export default App;
