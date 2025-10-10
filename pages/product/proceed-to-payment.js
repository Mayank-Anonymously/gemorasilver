import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { placeOrder } from '@/component/redux/thunk/orderThunkApi';
import axios from 'axios';
import { HOST } from '@/component/apibaseurl';

const CheckoutPage = ({ userId, cartTotal }) => {
	const cartItems = useSelector((state) => state.cart.items);
	const router = useRouter();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	// Shipping & billing same
	const [shippingAddress, setShippingAddress] = useState({
		name: '',
		street: '',
		zip: '',
		city: '',
		state: '',
		phone: '',
		country: '',
	});

	const [paymentMethod, setPaymentMethod] = useState('cod');
	const [loading, setLoading] = useState(false);

	const handleChange = async (e) => {
		const { name, value } = e.target;
		if (name === 'zip') {
			setShippingAddress((prev) => ({ ...prev, [name]: value }));

			try {
				// ✅ Call your own Node.js API
				const response = await axios.get(`${HOST}api/pincode/${value}`);

				if (response.data.success) {
					const { city, state } = response.data.data;

					setShippingAddress((prev) => ({
						...prev,
						city: city || '',
						state: state || '',
					}));
				} else {
					console.warn('❌ Invalid pincode or details not found');
					setShippingAddress((prev) => ({
						...prev,
						city: '',
						state: '',
					}));
				}
			} catch (error) {
				console.error('Error fetching pincode details:', error.message);
				setShippingAddress((prev) => ({
					...prev,
					city: '',
					state: '',
				}));
			}
		} else {
			setShippingAddress((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handlePlaceOrder = async () => {
		if (!shippingAddress.name || !shippingAddress.street) {
			alert('Please fill shipping address completely.');
			return;
		}
		const cartTotal = grandTotal.toFixed(2);
		const userId = user?._id;
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
		(acc, item) => acc + item.priceSale * item.quantity,
		0
	);
	const grandTotal = subtotal;

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
											disabled={field === 'city' && field === 'state'}
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
