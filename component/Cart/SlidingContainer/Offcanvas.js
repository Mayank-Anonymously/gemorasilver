'use client';

import React from 'react';
import { Offcanvas, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import {
	decrementQty,
	incrementQty,
	removeFromCart,
} from '@/component/redux/slices/cartSlice';

const CartOffcanvas = ({ show, handleClose }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.price * (item.quantity || 1),
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
			placement='end'
			className='listingcard'>
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
									src={item.image}
									rounded
									width={60}
									height={60}
									style={{ objectFit: 'cover' }}
								/>
								<div className='flex-grow-1 ms-3'>
									<h6 className='mb-1'>{item.name}</h6>
									<div className='d-flex justify-content-between align-items-center'>
										<div className='d-flex align-items-center gap-2'>
											<button
												className='btn btn-outline-dark btn-sm rounded-circle'
												onClick={() => dispatch(decrementQty(item.id))}>
												−
											</button>
											<span className='fw-bold'>{item.quantity}</span>
											<button
												className='btn btn-outline-dark btn-sm rounded-circle'
												onClick={() => dispatch(incrementQty(item.id))}>
												+
											</button>
										</div>
										<small className='text-muted'>
											₹{(item.price * item.quantity).toFixed(2)}
										</small>
									</div>
								</div>
								<Button
									variant='link'
									className='text-danger p-0 ms-2'
									onClick={() => dispatch(removeFromCart(item.id))}>
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
							<div className='d-flex justify-content-between'>
								<span>Total</span>
								<strong>₹{total.toFixed(2)}</strong>
							</div>
						</div>

						<div>
							<Button
								variant='secondary'
								className='w-100 mb-2'>
								Continue Shopping
							</Button>
							<Button
								variant='primary'
								className='w-100'
								href={'/product/checkout'}>
								Checkout
							</Button>
						</div>
					</>
				)}
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default CartOffcanvas;
