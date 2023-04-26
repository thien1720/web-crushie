import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {StoreBaseQuery} from "./base.sevice";


const productApi = createApi({
  reducerPath:"product",
  baseQuery: StoreBaseQuery,
  endpoints:(builder) =>({
    getAllProducts: builder.query({
      query:()=>{
        return "products"
      },
    })
  }),

});


// useQuery
// useGetAllProductsQuery

export const {useGetAllProductsQuery} = productApi;
export default productApi;