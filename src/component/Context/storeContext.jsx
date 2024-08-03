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
    useEffect(()=>{
     console.log(cartitem);
    },[cartitem])


    const contextValue = {
        food_list,
        cartitem,
        setcartitem,
        Addtocart,
        removefromcart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
