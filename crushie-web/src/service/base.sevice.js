import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const StoreBaseQuery = fetchBaseQuery({
  baseUrl : "https://eternity-json.herokuapp.com/shops/",

  // prepareHeaders : ()

});

export {StoreBaseQuery}
