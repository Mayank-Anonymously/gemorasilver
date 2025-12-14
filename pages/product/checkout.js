import { HOST } from '@/component/apibaseurl';
import FooterInfo from '@/component/common/FooterInfo';
import Screen from '@/component/common/Screen';
import { FaTrashAlt } from 'react-icons/fa';
import RelatedProducts from '@/component/home/RelatedProducts';
import Testimonials from '@/component/home/testimonials';
import {
	clearCart,
	decrementQty,
	incrementQty,
	removeFromCart,
} from '@/component/redux/slices/cartSlice';
import {
	updateGrandTotal,
	updateUserId,
} from '@/component/redux/slices/orderSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const CheckoutPage = () => {
	const cartItems = useSelector((state) => state.cart.items);

	const dispatch = useDispatch();
	const [coupon, setCoupon] = useState('');
	const [discount, setDiscount] = useState(0);
	const router = useRouter();

	const updateQuantity = (id, amount) => {
		setCart((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + amount) }
					: item
			)
		);
	};

	const applyCoupon = () => {
		if (coupon === 'DISCOUNT10') {
			setDiscount(0.1);
		} else {
			setDiscount(0);
			alert('Invalid coupon code');
		}
	};

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.priceSale * item.quantity,
		0
	);
	const grandTotal = subtotal - subtotal * discount;

	return (
		<Screen>
			<div
				className='container py-4 '
				style={{ marginTop: '90px' }}>
				<h4 className='mb-4'>Shopping Cart</h4>
				<Row>
					{/* Cart Items */}
					<Col md={8}>
						{cartItems.length === 0 ? (
							<p className='small'>Your cart is empty.</p>
						) : (
							cartItems.map((item) => {
								return (
									<Card
										className='mb-2 checkout-mobile-design-card'
										key={item.id}>
										<Card.Body className='d-flex justify-content-between align-items-center'>
											{/* Image + Details */}
											<div className='d-flex align-items-center checkout-mobile-design gap-2'>
												<img
													src={`${HOST}resources/${item.image[0]}`}
													rounded
													width={60}
													height={60}
													style={{ objectFit: 'cover' }}
												/>

												<div className='checkout-mobile-design-details'>
													<div>
														<div>
															<h6 className='mb-1'>{item.title}</h6>
															<small className='text-muted'>
																₹{item.priceSale.toFixed(2)}
															</small>
														</div>
													</div>

													{/* Quantity Controls */}
													<div className='d-flex align-items-center gap-1'>
														<Button
															variant='bg-none'
															size='sm'
															onClick={() => dispatch(decrementQty(item.id))}>
															-
														</Button>
														<small>{item.quantity}</small>
														<Button
															variant='bg-none'
															size='sm'
															onClick={() => dispatch(incrementQty(item.id))}>
															+
														</Button>
													</div>
													<div className='checkout-mobile-design-buttons'>
														{/* Total */}
														<small className='fw-bold'>
															₹{(item.priceSale * item.quantity).toFixed(2)}
														</small>
														<div>
															<Button
																style={{ background: '#4c1d1d' }}
																size='sm'
																onClick={() =>
																	dispatch(removeFromCart(item.id))
																}>
																<FaTrashAlt />
															</Button>
														</div>
													</div>
												</div>
											</div>
										</Card.Body>
									</Card>
								);
							})
						)}
					</Col>

					{/* Coupon & Summary */}
					<Col md={4}>
						<Card>
							<Card.Body className='py-3'>
								<h6 className='mb-2'>Coupon</h6>
								<div className='d-flex justify-content-between'>
									<Form.Control
										type='text'
										placeholder='Enter coupon code'
										value={coupon}
										onChange={(e) => setCoupon(e.target.value)}
										style={{ width: '60%' }}
									/>
									<Button
										className='bg-dark '
										onClick={applyCoupon}
										style={{ width: '30%', border: 'none', marginLeft: '10' }}>
										Apply
									</Button>
								</div>

								<hr className='my-2' />
								<div className='small'>
									<p className='d-flex justify-content-between mb-1'>
										<span>Subtotal:</span>
										<span>₹{subtotal.toFixed(2)}</span>
									</p>
									{discount > 0 && (
										<p className='d-flex justify-content-between text-success mb-1'>
											<span>Discount:</span>
											<span>-{(discount * 100).toFixed(0)}%</span>
										</p>
									)}
									<b className='text-center'>
										Inclusive All Charges (GST & Shipping)
									</b>
									<p className='d-flex justify-content-between fw-bold mb-1'>
										<span>Grand Total:</span>
										<span>₹{grandTotal.toFixed(2)}</span>
									</p>
								</div>

								<div className='d-flex gap-2 mt-2'>
									<Button
										variant='outline-secondary'
										className='w-50'
										size='sm'>
										Update Cart
									</Button>
									<Link
										href={'/product/proceed-to-payment'}
										onClick={() => {
											dispatch(updateUserId(grandTotal.toFixed(2)));
											dispatch(updateGrandTotal(grandTotal.toFixed(2)));
										}}
										style={{
											background: '#4c1d1d',
											color: 'white',
											height: '40px',
										}}
										className='btn w-50'
										size='sm'>
										Checkout
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>

			{/* <Testimonials /> */}
		</Screen>
	);
};

export default CheckoutPage;
