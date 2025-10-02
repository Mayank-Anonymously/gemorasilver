import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { clearCart } from '../slices/cartSlice';
import { HOST } from '@/component/apibaseurl';
export const addToCartApi =
	(dispatch) =>
	async (userId, product, quantity = 1) => {
		try {
			const response = await axios.post('/order/place', {
				userId,
				product,
				quantity,
			});
			console.log(response.data);
			// return response.data; // e.g., updated cart
		} catch (error) {
			console.error(
				'Error adding to cart:',
				error.response?.data || error.message
			);
			throw error;
		}
	};

// Place Order Thunk
export const placeOrder = createAsyncThunk(
	'product/proceed-to-payment',
	async (
		{ userId, cartTotal, cartItems, shippingAddress, paymentMethod, router },
		{ dispatch, rejectWithValue }
	) => {
		try {
			if (paymentMethod === 'cod') {
				// COD Flow
				const { data } = await axios.post(`${HOST}order/place`, {
					userId,
					shippingAddress,
					billingAddress: shippingAddress,
					paymentMethod: 'cod',
					amount: cartTotal,
					items: cartItems,
				});

				dispatch(clearCart()); // clear cart after success
				router.push(`/order/payment-status/${data.orderId}`);
				return data;
			} else {
				// Online Payment Flow
				const { data } = await axios.post(`${HOST}payment/pay`, {
					userId,
					shippingAddress,
					billingAddress: shippingAddress,
					paymentMethod,
					amount: cartTotal,
					items: cartItems,
				});
				console.log(data);

				if (data?.checkoutUrl) {
					window.location.href = data.checkoutUrl; // redirect to PG
				} else {
					return rejectWithValue('Payment initiation failed');
				}
			}
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.error || 'Something went wrong'
			);
		}
	}
);

// export const removeFromCart = async (userId, productId) => {
// 	try {
// 		const response = await axios.post('/api/cart/remove', {
// 			userId,
// 			productId,
// 		});
// 		return response.data;
// 	} catch (error) {
// 		console.error(
// 			'Error removing from cart:',
// 			error.response?.data || error.message
// 		);
// 		throw error;
// 	}
// };
// export const updateCartQuantity = async (userId, productId, actionType) => {
// 	try {
// 		const response = await axios.post('/api/cart/update-quantity', {
// 			userId,
// 			productId,
// 			actionType, // "increment" or "decrement"
// 		});
// 		return response.data;
// 	} catch (error) {
// 		console.error(
// 			'Error updating quantity:',
// 			error.response?.data || error.message
// 		);
// 		throw error;
// 	}
// };
export const fetchCart = async (userId) => {
	try {
		const response = await axios.get(`/api/cart/${userId}`);
		return response.data;
	} catch (error) {
		console.error(
			'Error fetching cart:',
			error.response?.data || error.message
		);
		throw error;
	}
};
