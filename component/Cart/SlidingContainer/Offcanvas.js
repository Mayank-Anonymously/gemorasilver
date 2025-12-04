'use client';

import React, { useEffect } from 'react';
import { Offcanvas, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import {
	decrementQty,
	incrementQty,
	removeFromCart,
} from '@/component/redux/slices/cartSlice';
import {
	fetchCart,
	removeFromCartApi,
} from '@/component/redux/thunk/cartThunkApi';
import { HOST } from '@/component/apibaseurl';
import Link from 'next/link';

const CartOffcanvas = ({ show, handleClose }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);
	const { user } = useSelector((state) => state.auth);
	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.priceSale * (item.quantity || 1),
		0
	);
	const total = subtotal;

	const handleRemove = (id) => {
		dispatch(removeFromCart(id));
	};
	const userId = user._id;

	useEffect(() => {
		fetchCart(userId, dispatch);
	}, []);
	console.log(cartItems);
	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			style={{ zIndex: 99999 }}
			placement='end'
			className='listingcard listingcard-cart'>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Shopping Cart</Offcanvas.Title>
			</Offcanvas.Header>

			<Offcanvas.Body>
				{cartItems.length === 0 ? (
					<p>Your cart is empty</p>
				) : (
					<>
						{cartItems.map((item, idx) => (
							<div
								key={idx}
								className='d-flex align-items-center mb-3 border-bottom pb-2'>
								<Image
									src={`${HOST}resources/${item.images[0]}`}
									rounded
									width={60}
									height={60}
									style={{ objectFit: 'cover' }}
								/>
								<div className='flex-grow-1 ms-3'>
									<h6 className='mb-1'>{item.title}</h6>
									<div className='d-flex justify-content-between align-items-center'>
										<div className='d-flex align-items-center gap-2'>
											<button
												className='btn  btn-sm rounded-circle'
												onClick={() => dispatch(decrementQty(item.id))}>
												−
											</button>
											<span className='fw-bold'>{item.quantity}</span>
											<button
												className='btn  btn-sm rounded-circle'
												onClick={() => dispatch(incrementQty(item.id))}>
												+
											</button>
										</div>
										<small className='text-muted'>
											₹{(item.priceSale * item.quantity).toFixed(2)}
										</small>
									</div>
								</div>
								<Button
									variant='link'
									className='text-danger p-0 ms-2'
									onClick={() => {
										dispatch(removeFromCart(item.id));
										removeFromCartApi(item.id, user?._id);
									}}>
									<FaTrashAlt size={16} />
								</Button>
							</div>
						))}

						<hr />

						<div className='mb-3'>
							<div className='d-flex justify-content-between'>
								<span>Subtotal</span>
								<strong>₹{subtotal.toFixed(2)}</strong>
							</div>
							<b className='text-center'>
								Inclusive All Charges (GST & Shipping)
							</b>
							<div className='d-flex justify-content-between'>
								<span>Total</span>
								<strong>₹{total.toFixed(2)}</strong>
							</div>
						</div>

						<div className='d-flex justify-content-around'>
							{/* <span
								className='btn mb-2'
								style={{
									background: '#4c1d1d',
									color: 'white',
									height: '40px',
								}}>
								<p>Continue Shop</p>
							</span> */}
							<Link
								style={{
									background: '#4c1d1d',
									color: 'white',
									height: '40px',
								}}
								className='btn w-100'
								href={'/product/checkout'}>
								Checkout
							</Link>
						</div>
					</>
				)}
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default CartOffcanvas;
