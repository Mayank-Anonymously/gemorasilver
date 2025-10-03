'use client';

import React from 'react';
import { Offcanvas, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FiltersSidebar from '@/component/Filterr/Sidebar';
import {
	decrementQty,
	incrementQty,
	removeFromCart,
} from '@/component/redux/slices/cartSlice';

const FilterOffCanvas = ({
	show,
	handleClose,
	categories,
	selectedCategories,
	setSelectedCategories,
	priceRange,
	setPriceRange,
}) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.priceSale * (item.quantity || 1),
		0
	);
	const total = subtotal;

	const handleRemove = (id) => {
		dispatch(removeFromCart(id));
	};

	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			className='listingcard'
			scroll={true} // ✅ allow body scroll inside Offcanvas
			backdrop={true}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Apply Filters</Offcanvas.Title>
			</Offcanvas.Header>

			<Offcanvas.Body className='p-4'>
				<FiltersSidebar
					categories={categories}
					priceRange={priceRange}
					setPriceRange={setPriceRange}
				/>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default FilterOffCanvas;
