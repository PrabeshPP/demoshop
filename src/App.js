import React,{useState} from "react";
import Header from "./Components/Header/Header";
import AvailableItems from "./Components/Items/AvailableItems";
import Modal from "./Components/UI/Modal";
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
   {cartShow && <Modal/>}
   <Header onShow={showCartHandler}/>
   <AvailableItems/>

   </div>
  );
}

export default App;
