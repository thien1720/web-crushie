import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {

      const { id } = payload.cards

      const find = state.find((item) => item.cards.id === id);

      if (find) {
        return state.map((item) =>
          item.cards.id === payload.cards.id
            ? {
              ...item,
              quantity: item.quantity + 1
            }
            : item
        );
      } else {
        return [
          ...state,
          payload
        ]

      }

    },
    removeFromCart(state, { payload }) {
      // return state.splice(payload,1)
      return state.filter(item => item.cards.id !== payload.cards.id)
    },
    increament(state, { payload }) {
      return state.map((item) =>
        item.cards.id === payload
          ? {
            ...item,
            quantity: item.quantity + 1
          }
          : item
      );
    },
    decreament(state, { payload }) {
      return state.map((item) =>
        item.cards.id === payload
          ? {
            ...item,
            quantity: item.quantity - 1
          }
          : item
      );
    },
    clear(state) {
      return [];
    }
  }
});

export const { addToCart, increament, decreament, clear, removeFromCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;