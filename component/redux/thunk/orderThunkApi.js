import axios from 'axios';

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
