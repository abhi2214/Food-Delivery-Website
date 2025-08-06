// import { useEffect } from "react";
import { food_list } from "../assets/assets.js"
import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null)


const StoreContextProvider = (props)=>{
    
    const [cartitems, setCartItems] = useState({});

    const addtocart = (itemid)=>{
        if(!cartitems[itemid]){
            setCartItems((prev)=>({...prev,[itemid]: 1}))
            }else{
            setCartItems((prev)=>({...prev,[itemid]: prev[itemid] + 1}))
            }
    }

    const removefromcart = (itemid)=>{
        setCartItems((prev)=>({...prev, [itemid]: prev[itemid] - 1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for( const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo = food_list.find((product)=>product._id===item)
                totalAmount += iteminfo.price*cartitems[item]
            }
        }
        return totalAmount
    }
    
    const contextValue = {
        food_list,
        cartitems,
        addtocart,
        removefromcart,
        setCartItems,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;