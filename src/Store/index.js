import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import shopReducer from '../features/shop/shopSlice'
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/user/userSlice'
import { shopApi } from '../services/shopService'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore ({
    reducer:{
        counterReducer,
        shopReducer,
        cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        userReducer,
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(shopApi.middleware), 
    //   EL MIDDLEWARE SIRVE PARA ACOPLAR AL MIDDLEWARE POR DEFECTO NUESTRA API PARA QUE SE PUEDAN REALIZAR LOS LLAMADOS ASINCRONOS
})

setupListeners( store.dispatch )

export default store