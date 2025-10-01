import FooterInfo from '@/component/common/FooterInfo';
import Screen from '@/component/common/Screen';
import RelatedProducts from '@/component/home/RelatedProducts';
import Testimonials from '@/component/home/testimonials';
import { decrementQty, incrementQty } from '@/component/redux/slices/cartSlice';
import {
	updateGrandTotal,
	updateUserId,
} from '@/component/redux/slices/orderSlice';
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

	const removeItem = (id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	const clearCart = () => setCart([]);

	const applyCoupon = () => {
		if (coupon === 'DISCOUNT10') {
			setDiscount(0.1);
		} else {
			setDiscount(0);
			alert('Invalid coupon code');
		}
	};

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const grandTotal = subtotal - subtotal * discount;

	return (
		<Screen>
			<div className='container py-4'>
				<h4 className='mb-4'>Shopping Cart</h4>
				<Row>
					{/* Cart Items */}
					<Col md={8}>
						{cartItems.length === 0 ? (
							<p className='small'>Your cart is empty.</p>
						) : (
							cartItems.map((item) => {
								console.log(item.id);
								return (
									<Card
										className='mb-2'
										key={item.id}>
										<Card.Body className='d-flex justify-content-between align-items-center py-2'>
											{/* Image + Details */}
											<div className='d-flex align-items-center gap-2'>
												<img
													src={item.images || '/images/products/default.jpg'} // add image in your data
													alt={item.name}
													style={{
														width: '50px',
														height: '50px',
														objectFit: 'cover',
														borderRadius: '4px',
													}}
												/>
												<div>
													<h6 className='mb-1'>{item.name}</h6>
													<small className='text-muted'>
														₹{item.price.toFixed(2)}
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

											{/* Total */}
											<small className='fw-bold'>
												₹{(item.price * item.quantity).toFixed(2)}
											</small>

											{/* Remove */}
											<Button
												variant='danger'
												size='sm'
												onClick={() => removeItem(item.id)}>
												✕
											</Button>
										</Card.Body>
									</Card>
								);
							})
						)}
						{cartItems.length > 0 && (
							<div className='d-flex justify-content-between mt-2'>
								<Button
									variant='outline-danger'
									size='sm'
									onClick={clearCart}>
									Clear Cart
								</Button>

								<Button
									variant='outline-primary'
									size='sm'>
									Continue Shopping
								</Button>
							</div>
						)}
					</Col>

					{/* Coupon & Summary */}
					<Col md={4}>
						<Card>
							<Card.Body className='py-3'>
								<h6 className='mb-2'>Coupon</h6>
								<Form.Control
									type='text'
									placeholder='Enter coupon code'
									value={coupon}
									size='sm'
									onChange={(e) => setCoupon(e.target.value)}
								/>
								<Button
									className='mt-2 w-100'
									size='sm'
									onClick={applyCoupon}>
									Apply Coupon
								</Button>

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
									<Button
										onClick={() => {
											dispatch(updateUserId(grandTotal.toFixed(2)));
											dispatch(updateGrandTotal(grandTotal.toFixed(2)));
											router.push('/product/proceed-to-payment');
										}}
										variant='warning'
										className='w-50'
										size='sm'>
										Checkout
									</Button>
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
