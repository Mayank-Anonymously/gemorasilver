// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../thunk/cartThunkApi';

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const existing = state.items.find(
				(item) => item.id === action.payload.id,
			);
			if (existing) {
				alert('Product is already in the cart!');
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		incrementQty: (state, action) => {
			const userId = action.payload.userId;
			const item = state.items.find((i) => i.id === action.payload.id);
			updateCart(userId, item);

			if (item) {
				item.quantity = parseInt(item.quantity, 10) + 1;
			}
		},
		getcart: (state, action) => {
			state.items = action.payload;
		},
		decrementQty: (state, action) => {
			const userId = action.payload.userId;
			const item = state.items.find((i) => i.id === action.payload.id);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
				updateCart(userId, item);
			} else {
				// Optional: remove if quantity becomes 0
				state.items = state.items.filter((i) => i.id !== action.payload);
			}
		},
		clearCart: (state) => {
			state.items = [];
		},
		buyNow: (state, action) => {
			// Save product as single checkout item
			const { product, quantity, size } = action.payload;
			state.items = [
				{
					...product,
					quantity: quantity || 1,
					size: size || '',
				},
			];
		},
		clearBuyNow: (state) => {
			state.buyNowItem = null;
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	incrementQty,
	decrementQty,
	clearCart,
	buyNow,
	getcart,
	clearBuyNow,
} = cartSlice.actions;

export default cartSlice.reducer;
