import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartContexReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("robinCart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
  //  cart:[],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment decrement 🔼 🔽

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  //  remove items 🥡
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //clear cart 🛍️
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //add cart to localstorage 🏬
  //set and get
  useEffect(() => {
   dispatch({type:"CART_TOTAL_ITEM"} )
   dispatch({type:"CART_PRICE_ITEM"} )

    localStorage.setItem("robinCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContex = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContex };
