import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartContexReducer"

 

 const CartContext = createContext();
 const initialState = {
    cart:[],
    total_item:"",
    total_amount:"",
    shipping_fee:50000,

 }

 const CartProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState)

    const addToCart = (id, color, amount, product) => {
      dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };


    return <CartContext.Provider value={{...state,addToCart}}>
        {children}
    </CartContext.Provider>
 }

 const useCartContex = ()=>{
    return useContext(CartContext); 
 }

export  {CartProvider,useCartContex};