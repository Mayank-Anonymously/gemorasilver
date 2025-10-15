import axios from 'axios';
import { addToCart, getcart } from '../slices/cartSlice';
import { HOST } from '@/component/apibaseurl';
import { toast } from 'react-toastify';

export const addToCartApi = async (userId, product, dispatch) => {
	try {
		const response = await axios.post(`${HOST}cart/addItemsToCart`, {
			userId,
			quantity: product.quantity,
			title: product.title,
			description: product.description,
			price: product.price,
			priceSale: product.priceSale,
			image: product.image,
			categoryId: product.categoryId,
			categoryName: product.categoryName,
			productSku: product.productSku,
			productCode: product.productCode,
			inStock: product.inStock,
			_id: product._id,
		});
		toast.success('Added to Cart!');
		dispatch(addToCart(response.data.response));

		return response.data;
	} catch (error) {
		console.error(
			'Error adding to cart:',
			error.response?.data || error.message
		);
		throw error;
	}
};
export const emptyCart = async (userId, productId) => {
	try {
		const response = await axios.get(`${HOST}cart/empty-cart/${userId}`);
		return response.data;
	} catch (error) {
		console.error(
			'Error removing from cart:',
			error.response?.data || error.message
		);
		throw error;
	}
};
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
export const fetchCart = async (userId, dispatch) => {
	try {
		console.log(`${HOST}cart/getAllCartItems/${userId}`);
		const response = await axios.get(`${HOST}cart/getAllCartItems/${userId}`);
		dispatch(getcart(response.data.response));
		return response.data;
	} catch (error) {
		console.error(
			'Error fetching cart:',
			error.response?.data || error.message
		);
		throw error;
	}
};

export const removeFromCartApi = async (id, userId) => {
	try {
		const response = await axios.put(
			`${HOST}cart/removeItemFromCart/${userId}/${id}`
		);
		console.log('Removed:', response.data);
		return response.data;
	} catch (error) {
		console.error(
			'Error removing from cart:',
			error.response?.data || error.message
		);
		throw error;
	}
};
