import { HOST } from '@/component/apibaseurl';
import React from 'react';
import { Container, Card, Alert, Spinner } from 'react-bootstrap';

const PaymentStatusPage = ({ status, orderId, message, paymentMethod }) => {
	return (
		<Container className='d-flex flex-column align-items-center justify-content-center min-vh-100'>
			<Card
				className='text-center p-4'
				style={{ maxWidth: '500px', width: '100%' }}>
				{paymentMethod === 'COD' && (
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

				{paymentMethod !== 'COD' && status === 'PENDING' && (
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
		// Call your backend to get order details (including paymentMethod)

		const res = await fetch(`${HOST}order/status/${orderId}`);
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

		if (order.paymentMethod === 'COD') {
			status = 'COD';
			message = 'Your order has been generated for Cash on Delivery.';
		} else {
			// Online payment → call PhonePe status API
			const paymentRes = await fetch(`${HOST}/payment/status/${orderId}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			});

			const paymentData = await paymentRes.json();
			status = paymentData.status || 'PENDING';
			message = paymentData.message || 'Payment is being processed.';
		}

		return {
			props: {
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
