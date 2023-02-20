
// creat a context 
// ThemeProvider
// consumer => usecontext hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer"

const AppContext = createContext();

const initialState = {
     isLoading:false,
     isError:false,
     products:[],
     featureProducts:[],
}


const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({children})=>{

     const [state,dispatch] = useReducer(reducer, initialState);

     const getProducts = async (url) =>{

          dispatch({type:"SET_LOADING"});

          try{const res = await axios.request(url);
          const products = await res.data;
          dispatch({type:"SET_API_DATA", payload:products})}
          catch(error){
                     dispatch({type:"API_ERROR"});
          }
          
     
     }


     useEffect(()=>{
          getProducts(API);
},[])

     return <AppContext.Provider  value={{...state}}>
            {children}
     </AppContext.Provider>
}

// Custom hook 
const useProductContext = () => {
     return useContext(AppContext);
}


export {AppProvider, AppContext, useProductContext};
