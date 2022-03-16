import React,{useState} from "react";
import Header from "./Components/Header/Header";
import Meal from "./Components/Items/Meal";
import Cart from "./Components/Cart/Cart";


function App() {
  const[cartShow,setCartShown]=useState(false);

  const showCartHandler=()=>{
    setCartShown(true);
  }

  const dismissCartHandler=()=>{
    setCartShown(false);
  }

  return (
   <div>
   {cartShow && <Cart onDismiss={dismissCartHandler}/>}
   <Header onShow={showCartHandler}/>
   <Meal/>

   </div>
  );
}

export default App;
