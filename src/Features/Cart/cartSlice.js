import { createSlice } from "@reduxjs/toolkit";
import CartItems from '../../cartItems'

const initialState = {
    cartItems: CartItems,
    amount: 4,
    total: 0,
    isLoading:true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemID = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
        },
       itemIncrease: (state, {payload}) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount + 1
       }
    }
})

// console.log(cartSlice);

export const {clearCart, removeItem, itemIncrease} =cartSlice.actions;



export default cartSlice.reducer;
