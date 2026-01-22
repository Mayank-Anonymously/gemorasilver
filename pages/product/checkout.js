import { HOST } from '@/component/apibaseurl';
import Screen from '@/component/common/Screen';
import { FaTrashAlt } from 'react-icons/fa';
import {
	decrementQty,
	incrementQty,
	removeFromCart,
} from '@/component/redux/slices/cartSlice';
import { updateGrandTotal } from '@/component/redux/slices/orderSlice';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCartApi } from '@/component/redux/thunk/cartThunkApi';

const CheckoutPage = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);

	// 🔹 Festival coupon visibility state
	const [showFestivalDiscount, setShowFestivalDiscount] = useState(false);

	/* ==========================
		SUBTOTAL
	========================== */
	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.priceSale * item.quantity,
		0,
	);

	/* ==========================
		EXISTING DISCOUNT LOGIC (UNCHANGED)
	========================== */
	let discountPercent = 0;

	if (cartItems.length === 1) {
		const qty = cartItems[0].quantity;

		if (qty === 1) discountPercent = 5;
		else if (qty === 2) discountPercent = 10;
		else if (qty >= 3) discountPercent = 15;
	} else if (cartItems.length > 1) {
		const totalItems = cartItems.length;

		if (totalItems === 1) discountPercent = 5;
		else if (totalItems === 2) discountPercent = 10;
		else if (totalItems >= 3) discountPercent = 15;
	}

	/* ==========================
		CALCULATIONS (ALWAYS APPLIED)
	========================== */
	const discountAmount = (subtotal * discountPercent) / 100;
	const grandTotal = Math.max(subtotal - discountAmount, 0);

	return (
		<Screen>
			<div
				className='container py-4'
				style={{ marginTop: '90px' }}>
				<h4 className='mb-4'>Shopping Cart</h4>

				<Row>
					{/* ================= CART ITEMS ================= */}
					<Col md={8}>
						{cartItems.length === 0 ?
							<p className='small'>Your cart is empty.</p>
						:	cartItems.map((item) => (
								<Card
									className='mb-2'
									key={item.id}>
									<Card.Body className='d-flex justify-content-between align-items-center'>
										<div className='d-flex gap-3 align-items-center'>
											<img
												src={`${HOST}resources/${item.image[0]}`}
												width={60}
												height={60}
												style={{ objectFit: 'cover' }}
												alt={item.title}
											/>

											<div>
												<h6 className='mb-1'>{item.title}</h6>
												<small className='text-muted'>
													₹{item.priceSale.toFixed(2)}
												</small>

												<div className='d-flex align-items-center gap-2 mt-1'>
													<Button
														size='sm'
														variant='light'
														onClick={() => {
															if (item.quantity === 1) {
																dispatch(removeFromCart(item.id));
																removeFromCartApi(item.id, item.userId);
															} else {
																dispatch(decrementQty(item.id));
															}
														}}>
														-
													</Button>

													<span>{item.quantity}</span>

													<Button
														size='sm'
														variant='light'
														onClick={() =>
															dispatch(
																incrementQty({
																	id: item.id,
																	userId: item.userId,
																}),
															)
														}>
														+
													</Button>
												</div>
											</div>
										</div>

										<div className='text-end'>
											<p className='fw-bold mb-1'>
												₹{(item.priceSale * item.quantity).toFixed(2)}
											</p>

											<Button
												size='sm'
												style={{ background: '#4c1d1d', border: 'none' }}
												onClick={() => {
													dispatch(removeFromCart(item.id));
													removeFromCartApi(item.id, item.userId);
												}}>
												<FaTrashAlt />
											</Button>
										</div>
									</Card.Body>
								</Card>
							))
						}
					</Col>

					{/* ================= SUMMARY ================= */}
					<Col md={4}>
						<Card>
							<Card.Body>
								{/* Festival Coupon */}
								<Button
									className='w-100 mb-3'
									style={{ background: '#4c1d1d', border: 'none' }}
									onClick={() => setShowFestivalDiscount(true)}>
									Apply Festival Coupon
								</Button>

								<p className='d-flex justify-content-between mb-1'>
									<span>Subtotal</span>
									<span>₹{subtotal.toFixed(2)}</span>
								</p>

								{/* Discount visible only after festival coupon */}
								{showFestivalDiscount && discountPercent > 0 && (
									<p className='d-flex justify-content-between text-success mb-1'>
										<span>Festival Discount ({discountPercent}%)</span>
										<span>-₹{discountAmount.toFixed(2)}</span>
									</p>
								)}

								<p className='d-flex justify-content-between fw-bold'>
									<span>Grand Total</span>
									<span>₹{grandTotal.toFixed(2)}</span>
								</p>

								<Link
									href='/product/proceed-to-payment'
									className='btn w-100 mt-2'
									style={{ background: '#4c1d1d', color: '#fff' }}
									onClick={() =>
										dispatch(updateGrandTotal(grandTotal.toFixed(2)))
									}>
									Checkout
								</Link>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</Screen>
	);
};

export default CheckoutPage;
