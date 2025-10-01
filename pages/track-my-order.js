// pages/TrackOrder.js
'use client';

import Screen from '@/component/common/Screen';
import { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Card,
	Alert,
} from 'react-bootstrap';

export default function TrackOrder() {
	const [orderId, setOrderId] = useState('');
	const [order, setOrder] = useState(null);
	const [error, setError] = useState('');

	// Fake order data for demo
	const mockOrder = {
		id: 'ABC123',
		status: 'Shipped',
		estimatedDelivery: 'August 30, 2025',
		items: [
			{ name: 'Wireless Headphones', qty: 1, price: 120 },
			{ name: 'Bluetooth Speaker', qty: 2, price: 90 },
		],
	};

	const handleTrackOrder = (e) => {
		e.preventDefault();
		if (orderId.trim().toUpperCase() === 'ABC123') {
			setOrder(mockOrder);
			setError('');
		} else {
			setError('Order not found. Please check your Order ID.');
			setOrder(null);
		}
	};

	return (
		<Screen>
			<section className='py-5 '>
				<Container
					style={{ background: '#fff4f4', padding: 44, marginTop: 50 }}>
					{/* Page Heading */}
					<Row className='mb-4'>
						<Col className='text-center'>
							<h2 className='fw-bold'>Track My Order</h2>
							<p className='text-muted'>
								Enter your Order ID to view the latest status of your purchase.
							</p>
						</Col>
					</Row>

					{/* Track Form */}
					<Row className='justify-content-center mb-4'>
						<Col md={6}>
							<Form
								onSubmit={handleTrackOrder}
								className='d-flex gap-2'>
								<Form.Control
									type='text'
									placeholder='Enter Order ID'
									value={orderId}
									onChange={(e) => setOrderId(e.target.value)}
								/>
								<Button
									type='submit'
									variant='primary'>
									Track
								</Button>
							</Form>
							{error && (
								<Alert
									variant='danger'
									className='mt-3'>
									{error}
								</Alert>
							)}
						</Col>
					</Row>

					{/* Order Details */}
					{order && (
						<Row className='justify-content-center'>
							<Col md={8}>
								<Card className='shadow-sm border-0'>
									<Card.Body>
										<h5 className='fw-bold'>Order ID: {order.id}</h5>
										<p>
											<strong>Status:</strong> {order.status}
										</p>
										<p>
											<strong>Estimated Delivery:</strong>{' '}
											{order.estimatedDelivery}
										</p>
										<hr />
										<h6 className='fw-bold'>Items</h6>
										<ul className='list-unstyled'>
											{order.items.map((item, idx) => (
												<li
													key={idx}
													className='mb-2'>
													{item.qty} × {item.name} – ${item.price}
												</li>
											))}
										</ul>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					)}
				</Container>
			</section>
		</Screen>
	);
}
