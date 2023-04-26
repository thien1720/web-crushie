import cartReducer from "./reducers/cart.slice";
import heartReducer from "./reducers/option.slice";
import { configureStore } from "@reduxjs/toolkit";
import productApi from "../service/product.sevice";

const store = configureStore({
    // có thể khai báo nhiều slice
   reducer:{
    [productApi.reducerPath]: productApi.reducer,
     cart : cartReducer, 
     heart : heartReducer,

    
     // Khái báo 1 slice với giá trị là cartReducer được export từ file handleCartSlice
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(productApi.middleware)
  
})
export default store


