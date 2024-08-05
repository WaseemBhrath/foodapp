import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartitem,setcartitem] = useState({});
    
const Addtocart=(itemId)=>{
    if(!cartitem[itemId]){
        setcartitem((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}
    const removefromcart=(itemId)=>{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
  const getTotalAmount = ()=>{
    let totalAmount=0;
    for (const item in cartitem)
    {
        if (cartitem[item]>0) {
            let iteminfo=food_list.find((product)=>product._id===item);
            totalAmount+= iteminfo.price*cartitem[item];

            
        }
     
    }
    return totalAmount;
  }


    const contextValue = {
        food_list,
        cartitem,
        setcartitem,
        Addtocart,
        removefromcart,
        getTotalAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
