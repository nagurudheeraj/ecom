import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from './features/addToCartSlice'
import userLoginReducer from './features/userLoginSlice'


export const store = configureStore({
    reducer: {
        addToCart: addToCartReducer,
        userLogin: userLoginReducer
    },
})