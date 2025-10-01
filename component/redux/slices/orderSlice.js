// src/redux/slices/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userId: null,
	shippingAddress: null,
	billingAddress: null,
	paymentMethod: null,
	grandTotal: null,
};

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setOrderDetails: (state, action) => {
			const {
				userId,
				shippingAddress,
				billingAddress,
				paymentMethod,
				grandTotal,
			} = action.payload;

			state.userId = userId ?? state.userId;
			state.shippingAddress = shippingAddress ?? state.shippingAddress;
			state.billingAddress = billingAddress ?? state.billingAddress;
			state.paymentMethod = paymentMethod ?? state.paymentMethod;
			state.grandTotal = grandTotal ?? state.grandTotal;
		},
		updateShippingAddress: (state, action) => {
			state.shippingAddress = action.payload;
		},
		updateBillingAddress: (state, action) => {
			state.billingAddress = action.payload;
		},
		updatePaymentMethod: (state, action) => {
			state.paymentMethod = action.payload;
		},
		updateGrandTotal: (state, action) => {
			state.grandTotal = action.payload;
		},
		updateUserId: (state, action) => {
			state.userId = action.payload;
		},
		clearOrder: () => initialState,
	},
});

export const {
	setOrderDetails,
	updateShippingAddress,
	updateBillingAddress,
	updatePaymentMethod,
	updateGrandTotal,
	clearOrder,
	updateUserId,
} = orderSlice.actions;

export default orderSlice.reducer;
