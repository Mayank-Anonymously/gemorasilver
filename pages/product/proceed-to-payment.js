import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Card,
	Alert,
} from 'react-bootstrap';
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
	const [errors, setErrors] = useState({});

	// Handle input changes
	const handleChange = async (e) => {
		const { name, value } = e.target;
		setShippingAddress((prev) => ({ ...prev, [name]: value }));

		if (name === 'zip' && value.length === 6) {
			try {
				const response = await axios.get(`${HOST}api/pincode/${value}`);
				if (response.data.success) {
					const { city, state } = response.data.data;
					setShippingAddress((prev) => ({
						...prev,
						city: city || '',
						state: state || '',
					}));
				} else {
					setShippingAddress((prev) => ({ ...prev, city: '', state: '' }));
				}
			} catch (err) {
				console.error(err.message);
				setShippingAddress((prev) => ({ ...prev, city: '', state: '' }));
			}
		}
	};

	const validateForm = () => {
		const newErrors = {};
		if (!shippingAddress.name.trim()) newErrors.name = 'Name is required';
		if (!shippingAddress.street.trim()) newErrors.street = 'Street is required';
		if (!shippingAddress.zip.trim()) newErrors.zip = 'Pincode is required';
		else if (!/^\d{6}$/.test(shippingAddress.zip))
			newErrors.zip = 'Pincode must be 6 digits';
		if (!shippingAddress.city.trim()) newErrors.city = 'City is required';
		if (!shippingAddress.state.trim()) newErrors.state = 'State is required';
		if (!shippingAddress.phone.trim())
			newErrors.phone = 'Phone number is required';
		else if (!/^\d{10}$/.test(shippingAddress.phone))
			newErrors.phone = 'Phone number must be 10 digits';
		if (!shippingAddress.country.trim())
			newErrors.country = 'Country is required';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const saveAddressApi = async (data) => {
		try {
			setLoading(true);
			const response = await axios.post(`${HOST}address/save`, data, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			});
			return response.data;
		} catch (error) {
			console.error('Error saving address:', error.message);
		} finally {
			setLoading(false);
		}
	};

	const handlePlaceOrder = async () => {
		if (!validateForm()) return;

		await saveAddressApi(shippingAddress);
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

	const subtotal = cartItems.reduce((acc, item) => acc + item.priceSale, 0);
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
											isInvalid={!!errors[field]}
											disabled={field === 'city' || field === 'state'}
										/>
										<Form.Control.Feedback type='invalid'>
											{errors[field]}
										</Form.Control.Feedback>
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
