import axios from 'axios';

import { HOST } from '@/component/apibaseurl';
import { toast } from 'react-toastify';
import {
	addTowishlist,
	getwishlist,
	removeFromwishlist,
} from '../slices/wishlistSlice';

export const addTowishlistApi = async (userId, product, dispatch) => {
	try {
		const response = await axios.post(`${HOST}wishlist/addItemsToWishlist`, {
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
			id: userId,
			_id: product._id,
			userId,
		});
		toast.success('Added to Wishlist!');
		dispatch(addTowishlist(response.data.response));
		console.log(response.data.response);
		return response.data;
	} catch (error) {
		console.error(
			'Error adding to wishlist:',
			error.response?.data || error.message
		);
		throw error;
	}
};

// export const updatewishlistQuantity = async (userId, productId, actionType) => {
// 	try {
// 		const response = await axios.post('/api/wishlist/update-quantity', {
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

export const fetchwishlist = async ({ userId, dispatch }) => {
	try {
		const response = await axios.get(
			`${HOST}wishlist/getWishlistItemById/${userId}`
		);
		if (response.status === 200) {
			dispatch(getwishlist(response.data.response));
		} else {
			return;
		}
	} catch (error) {
		console.error(
			'Error fetching wishlist:',
			error.response?.data || error.message
		);
		throw error;
	}
};

export const removeFromwishlistApi = async (userId, id, dispatch) => {
	try {
		const response = await axios.put(
			`${HOST}wishlist/removeItemFromWishlist/${userId}/${id}`
		);
		dispatch(removeFromwishlist(id));
		return response.data;
	} catch (error) {
		console.error(
			'Error removing from wishlist:',
			error.response?.data || error.message
		);
		throw error;
	}
};
