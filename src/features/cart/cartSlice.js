import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to the cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    // Remove item from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions to dispatch them
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export the reducer to be included in the store
export default cartSlice.reducer;
