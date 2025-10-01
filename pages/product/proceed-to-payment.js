import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { placeOrder } from '@/component/redux/thunk/orderThunkApi';

const CheckoutPage = ({ userId, cartTotal }) => {
	const cartItems = useSelector((state) => state.cart.items);
	const router = useRouter();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	// Shipping & billing same
	const [shippingAddress, setShippingAddress] = useState({
		name: '',
		street: '',
		city: '',
		state: '',
		zip: '',
		phone: '',
		country: '',
	});

	const [paymentMethod, setPaymentMethod] = useState('cod');
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setShippingAddress((prev) => ({ ...prev, [name]: value }));
	};
	console.log(user._id);

	const handlePlaceOrder = async () => {
		if (!shippingAddress.name || !shippingAddress.street) {
			alert('Please fill shipping address completely.');
			return;
		}
		const cartTotal = grandTotal.toFixed(2);
		const userId = user._id;
		dispatch(
			placeOrder({
				userId,
				cartTotal,
				cartItems,
				shippingAddress,
				paymentMethod,
				router,
			})
		);
	};

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const grandTotal = subtotal;

	console.log(userId, cartTotal, cartItems, shippingAddress, paymentMethod);

	return (
		<Screen>
			<Container className='py-4'>
				<h2 className='mb-4'>Checkout</h2>
				<Row>
					{/* Shipping Address */}
					<Col md={6}>
						<Card className='p-3 mb-3 shadow-sm'>
							<h4>Shipping Address</h4>
							<Form>
								{Object.keys(shippingAddress).map((field) => (
									<Form.Group
										className='mb-2'
										key={field}>
										<Form.Label>{field.toUpperCase()}</Form.Label>
										<Form.Control
											type='text'
											name={field}
											value={shippingAddress[field]}
											onChange={handleChange}
											required
										/>
									</Form.Group>
								))}
							</Form>
						</Card>
					</Col>

					{/* Payment & Summary */}
					<Col md={6}>
						<Card className='p-3 mb-3 shadow-sm'>
							<h4>Payment Method</h4>
							<Form>
								<Form.Check
									type='radio'
									label='Cash on Delivery'
									name='payment'
									value='cod'
									checked={paymentMethod === 'cod'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<Form.Check
									type='radio'
									label='Credit/Debit Card'
									name='payment'
									value='card'
									checked={paymentMethod === 'card'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<Form.Check
									type='radio'
									label='UPI'
									name='payment'
									value='upi'
									checked={paymentMethod === 'upi'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<Form.Check
									type='radio'
									label='Wallet'
									name='payment'
									value='wallet'
									checked={paymentMethod === 'wallet'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
							</Form>
						</Card>

						<Card className='p-3 shadow-sm'>
							<h5>Order Summary</h5>
							<p>
								Total Amount: <strong>₹{grandTotal.toFixed(2)}</strong>
							</p>
							<Button
								variant='success'
								onClick={handlePlaceOrder}
								disabled={loading}>
								{loading ? 'Processing...' : 'Place Order'}
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</Screen>
	);
};

export default CheckoutPage;
