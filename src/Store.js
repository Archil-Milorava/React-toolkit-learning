import cartReducer from './Features/Cart/cartSlice';




const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
reducer: {
    cart: cartReducer
}
})