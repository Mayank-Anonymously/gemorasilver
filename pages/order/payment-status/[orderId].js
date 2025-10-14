import { HOST } from '@/component/apibaseurl';
import { emptyCart } from '@/component/redux/thunk/cartThunkApi';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Card, Alert, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const PaymentStatusPage = ({
	status,
	orderId,
	message,
	paymentMethod,
	order,
}) => {
	const { user } = useSelector((state) => state.auth);
	const userId = user._id;

	const handleInvoicecall = async () => {
		try {
			const response = await axios.post(`${HOST}payment/send-invoice`, {
				user,
				order,
			});

			return response.data;
		} catch (error) {
			alert(error.response?.data || error.message);
		}
	};

	const handleFreeGiftCountCall = async () => {
		axios
			.post(`${HOST}loyality/${userId}/increment`)
			.then((res) => {
				setPurchaseCount(res.data.purchase_count);
				setRemaining(res.data.remaining);
				setEligible(res.data.eligible);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		if (paymentMethod !== 'COD' && status === 'COMPLETED') {
			handleInvoicecall();
			handleFreeGiftCountCall();
		}
		emptyCart(userId);
	}, []);

	return (
		<Container className='d-flex flex-column align-items-center justify-content-center min-vh-100'>
			<Card
				className='text-center p-4'
				style={{ maxWidth: '500px', width: '100%' }}>
				{paymentMethod === 'cod' && (
					<Alert variant='info'>
						<h2>Order Placed Successfully!</h2>
						<p>
							Your Order ID: <strong>{orderId}</strong>
						</p>
						<p>
							Your order has been generated and will be collected via{' '}
							<strong>Cash on Delivery (COD)</strong>.
						</p>
					</Alert>
				)}

				{paymentMethod !== 'COD' && status === 'COMPLETED' && (
					<Alert variant='success'>
						<h2>Payment Successful!</h2>
						<p>
							Your Order ID: <strong>{orderId}</strong>
						</p>
						<p>{message}</p>
					</Alert>
				)}

				{paymentMethod !== 'COD' && status === 'FAILURE' && (
					<Alert variant='danger'>
						<h2>Payment Failed!</h2>
						<p>
							Your Order ID: <strong>{orderId}</strong>
						</p>
						<p>{message}</p>
					</Alert>
				)}

				{paymentMethod != 'COD' && status === 'PENDING' && (
					<Alert variant='warning'>
						<h2>Payment Pending!</h2>
						<p>
							Your Order ID: <strong>{orderId}</strong>
						</p>
						<Spinner
							animation='border'
							size='sm'
							className='mt-2'
						/>
						<p className='mt-2'>{message}</p>
					</Alert>
				)}
			</Card>
		</Container>
	);
};

export default PaymentStatusPage;

// Server-side function
export async function getServerSideProps(context) {
	const { orderId } = context.query;

	try {
		const res = await fetch(`${HOST}order/${orderId}`);
		const order = await res.json();

		if (!order) {
			return {
				props: {
					status: 'PENDING',
					orderId,
					message: 'Order not found.',
					paymentMethod: null,
				},
			};
		}

		let status = 'PENDING';
		let message = 'Payment is being processed.';

		if (order.paymentMethod === 'cod') {
			status = 'COD';
			message = 'Your order has been generated for Cash on Delivery.';
		} else {
			// Online payment → call PhonePe status API
			const paymentRes = await fetch(`${HOST}payment/status/${orderId}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});

			const paymentData = await paymentRes.json();

			status = paymentData.status || 'PENDING';
			message = paymentData.message || 'Payment is being processed.';
		}

		return {
			props: {
				order,
				status,
				orderId,
				message,
				paymentMethod: order.paymentMethod,
			},
		};
	} catch (err) {
		console.error('Error fetching payment status:', err);
		return {
			props: {
				status: 'PENDING',
				orderId,
				message: 'Unable to fetch payment status. Please try again.',
				paymentMethod: null,
			},
		};
	}
}
