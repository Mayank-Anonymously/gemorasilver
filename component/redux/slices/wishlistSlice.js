// store/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	wishlistitems: [],
};

export const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {
		addTowishlist: (state, action) => {
			const existing = state.wishlistitems.find(
				(item) => item.id === action.payload.id
			);
			if (existing) {
				alert('Product is already in the wishlist!');
			} else {
				state.wishlistitems.push({ ...action.payload, quantity: 1 });
			}
		},
		getwishlist: (state, action) => {
			state.wishlistitems = action.payload;
		},
		removeFromwishlist: (state, action) => {
			state.wishlistitems = state.wishlistitems.filter(
				(item) => item._id !== action.payload
			);
		},
		incrementQty: (state, action) => {
			const item = state.wishlistitems.find((i) => i.id === action.payload);

			if (item) item.quantity += 1;
		},
		decrementQty: (state, action) => {
			const item = state.wishlistitems.find((i) => i.id === action.payload);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
			} else {
				// Optional: remove if quantity becomes 0
				state.wishlistitems = state.wishlistitems.filter(
					(i) => i.id !== action.payload
				);
			}
		},
		clearwishlist: (state) => {
			state.wishlistitems = [];
		},
		buyNow: (state, action) => {
			// Save product as single checkout item
			const { product, quantity, size } = action.payload;
			state.wishlistitems = [
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
	addTowishlist,
	removeFromwishlist,
	incrementQty,
	decrementQty,
	clearwishlist,
	buyNow,
	getwishlist,
	clearBuyNow,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
