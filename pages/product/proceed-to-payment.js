import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import Screen from '@/component/common/Screen';
import { useSelector } from 'react-redux';

const CheckoutPage = ({ userId, cartTotal }) => {
	const cartItems = useSelector((state) => state.cart.items);

	const [shippingAddress, setShippingAddress] = useState({
		name: '',
		street: '',
		city: '',
		state: '',
		zip: '',
		country: '',
	});

	const [paymentMethod, setPaymentMethod] = useState('cod');

	const handleChange = (e, type) => {
		const { name, value } = e.target;
		if (type === 'billing') {
			setBillingAddress((prev) => ({ ...prev, [name]: value }));
		} else {
			setShippingAddress((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handlePlaceOrder = async () => {
		try {
			const { data } = await axios.post('/api/orders/place', {
				userId,
				billingAddress,
				shippingAddress,
				paymentMethod,
			});

			alert(data.message);
		} catch (error) {
			alert(error.response?.data?.error || 'Something went wrong');
		}
	};
	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const grandTotal = subtotal - subtotal * discount;

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
											onChange={(e) => handleChange(e, 'shipping')}
											required
										/>
									</Form.Group>
								))}
							</Form>
						</Card>
					</Col>
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
								Total Amount: <strong>₹{grandTotal}</strong>
							</p>
							<Button
								variant='success'
								onClick={handlePlaceOrder}>
								Place Order
							</Button>
						</Card>
					</Col>
				</Row>

				{/* Payment Method */}

				{/* Summary & Place Order */}
			</Container>
		</Screen>
	);
};

export default CheckoutPage;
