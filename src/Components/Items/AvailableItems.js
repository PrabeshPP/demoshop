import React,{useContext,useState} from "react";
import classes from "./AvailableItems.module.css";
import Card from "../UI/Card";
import CartContext from "../../Store/Cart-context";





const Items=[
    {
        "id": 1,
        "name": "iPhone 12 Pro",
        "desc": "Apple iPhone 12th generation",
        "price": 999,
        "color": "#33505a",
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000"
    },
    {
        "id": 2,
        "name": "Pixel 5",
        "desc": "Google Pixel phone 5th generation",
        "price": 699,
        "color": "#00ac51",
        "image": "https://www.telstra.com.au/content/dam/tcom/lego/2020/plans-devices/mobiles/google-pixel-5/shared-google-pixel-5-black-05-900x1200.png"
    },
    {
        "id": 3,
        "name": "M1 Macbook Air",
        "desc": "Apple Macbook air with apple silicon",
        "price": 1099,
        "color": "#e0bfae",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOMstwtmLnjFb3NHiDJ_kcQnueNVH-rv_3ps96HZmXlFumKWaiBqq_L4Uoyx3iFiNTrXNEbyB&usqp=CAc"
    },
    {
        "id": 4,
        "name": "Playstation 5",
        "desc": "Sony Playstation 5th generation",
        "price": 500,
        "color": "#544ee4",
        "image": "https://i.gadgets360cdn.com/products/large/sony-ps5-649x800-1592631239.jpeg"
    },
    {
        "id": 5,
        "name": "Airpods Pro",
        "desc": "Apple Aipods Pro 1st generation",
        "price": 200,
        "color": "#e3e4e9",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROEs084z65psoo06zYl5R0tUzywOVKVQZzmzqCj3PDP1vVJTWv3gGwGMFENSy4qV4n7sEQjE&usqp=CAc"
    },
    {
        "id": 6,
        "name": "iPad Pro",
        "desc": "Apple iPad Pro 2020 edition",
        "price": 799,
        "color": "#f73984",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzUeRQ5uH7E3hpECib8qxdhfHv6SnUGT7mOsew_xiOoqRR7ZpdH-TQ4J6-HuIEfqHimYyPXWH&usqp=CAc"
    },
    {
        "id": 7,
        "name": "Galaxy S21 Ultra",
        "desc": "Samsung Galaxy S21 Ultra 2021 edition",
        "price": 1299,
        "color": "#1c1c1c",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_PZcc0wicVYR992s5QCIDLYy8t-z-9kibTUdWZBN2sd86aaqdAJfhvxAwZNWV9wfdzDikpr1&usqp=CAc"
    },
    {
        "id": 8,
        "name": "Galaxy S21",
        "desc": "Samsung Galaxy S21 2021 edition",
        "price": 899,
        "color": "#7c95eb",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNHd7FwarbxA1xdMFt24KazjcR4dWPH_t_T5dz4YNK1s7rJAQ8gOIuR_NRw6eeiQgFhbZ9sAN&usqp=CAc"
    }

]





const AvailableItems=()=>{
    const cartCtx=useContext(CartContext);

    const[added,setIsAdded]=useState(false);

    const ItemList=Items.map((item)=>{
        const addItemHandler=()=>{
            
            cartCtx.addItem(
                {
                    id:item.id,
                    name:item.name,
                    price:item.price,
                    description:item.desc,
                   
                }
            )
        
            
        }

        



   return <Card key={item.id}>
            <img src={item.image}  alt={item.name}/>
            <div className={classes["div-name"]}>
                <span>{item.name}</span>
            </div><div className={classes["div-price"]}><span>${item.price}</span></div>
            <div className={classes["div-button"]}>
            <button className={classes.buttonBuy}>Buy</button>
               {added?<button className={classes.buttonAdd}>Remove</button> :<button className={classes.buttonAdd} onClick={addItemHandler} >Add To Cart</button>}
            </div>
            
        </Card>
       
    })
   
    return (
      <section className={classes.section}>
         
         <ul className={classes.ul}>
        {ItemList}
        </ul>
         
      </section>
    );
}

export default AvailableItems;