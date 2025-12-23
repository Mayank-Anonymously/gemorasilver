import { HOST } from '@/component/apibaseurl';
import Screen from '@/component/common/Screen';
import { FaTrashAlt } from 'react-icons/fa';
import {
	decrementQty,
	incrementQty,
	removeFromCart,
} from '@/component/redux/slices/cartSlice';
import {
	updateGrandTotal,
	updateUserId,
} from '@/component/redux/slices/orderSlice';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCartApi } from '@/component/redux/thunk/cartThunkApi';

const CheckoutPage = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const [coupon, setCoupon] = useState('');
	const [discount, setDiscount] = useState(0);

	// ✅ Subtotal
	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.priceSale * item.quantity,
		0
	);

	// ✅ Total quantity (IMPORTANT)
	const totalItems = cartItems.length;
	console.log(totalItems);
	// ✅ Apply coupon logic
	const applyCoupon = () => {
		const MIN_ITEMS = 4;
		const FLAT_DISCOUNT = 500;

		if (totalItems < MIN_ITEMS) {
			setDiscount(0);
			alert('Coupon applicable only on purchase of 4 or more items');
			return;
		}

		if (coupon === 'NEWYEAR500') {
			setDiscount(FLAT_DISCOUNT);
		} else {
			setDiscount(0);
		}
	};

	// ✅ Grand total (flat discount)
	const grandTotal = Math.max(subtotal - discount, 0);

	return (
		<Screen>
			<div
				className='container py-4'
				style={{ marginTop: '90px' }}>
				<h4 className='mb-4'>Shopping Cart</h4>

				<Row>
					{/* CART ITEMS */}
					<Col md={8}>
						{cartItems.length === 0 ? (
							<p className='small'>Your cart is empty.</p>
						) : (
							cartItems.map((item) => (
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
															if (item.quantity == 1) {
																dispatch(removeFromCart(item.id));
																removeFromCartApi(item.id, userId);
															}
															dispatch(decrementQty(item.id));
														}}>
														-
													</Button>

													<span>{item.quantity}</span>

													<Button
														size='sm'
														variant='light'
														onClick={() => {
															dispatch(
																incrementQty({
																	id: item.id,
																	userId: item.userId,
																})
															);
														}}>
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
						)}
					</Col>

					{/* SUMMARY */}
					<Col md={4}>
						<Card>
							<Card.Body>
								<h6>Coupon</h6>

								<p className='text-muted'>
									* Flat ₹500 OFF on purchase of 4 or more items —
									<span
										onClick={() => {
											if (totalItems >= 4) {
												setCoupon('NEWYEAR500');
												applyCoupon();
											}
										}}
										style={{
											color: totalItems >= 4 ? '#0d6efd' : '#999',
											cursor: totalItems >= 4 ? 'pointer' : 'not-allowed',
											fontWeight: '600',
											marginLeft: '4px',
										}}>
										Apply
									</span>
								</p>

								<div className='d-flex gap-2'>
									<Form.Control
										value={coupon}
										disabled
										placeholder='Enter coupon'
									/>
									<Button
										className='bg-dark'
										disabled={totalItems < 4}
										onClick={applyCoupon}>
										Apply
									</Button>
								</div>

								<hr />

								<p className='d-flex justify-content-between mb-1'>
									<span>Subtotal</span>
									<span>₹{subtotal.toFixed(2)}</span>
								</p>

								{discount > 0 && (
									<p className='d-flex justify-content-between text-success mb-1'>
										<span>Discount</span>
										<span>-₹{discount.toFixed(2)}</span>
									</p>
								)}

								<p className='d-flex justify-content-between fw-bold'>
									<span>Grand Total</span>
									<span>₹{grandTotal.toFixed(2)}</span>
								</p>

								<Link
									href='/product/proceed-to-payment'
									onClick={() => {
										dispatch(updateUserId(grandTotal.toFixed(2)));
										dispatch(updateGrandTotal(grandTotal.toFixed(2)));
									}}
									className='btn w-100 mt-2'
									style={{ background: '#4c1d1d', color: '#fff' }}>
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
