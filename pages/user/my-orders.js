import React, { useEffect, useState } from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	Badge,
	Spinner,
	Accordion,
	Button,
} from 'react-bootstrap';
import axios from 'axios';
import { HOST } from '@/component/apibaseurl';
import { useSelector } from 'react-redux';
import Screen from '@/component/common/Screen';
import Link from 'next/link';

const MyOrders = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const { user } = useSelector((state) => state.auth);
	const userId = user?._id;

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const res = await axios.get(`${HOST}order/by-user/${userId}`);
				setOrders(res.data.orders);
			} catch (err) {
				console.error('Failed to fetch orders:', err);
			} finally {
				setLoading(false);
			}
		};

		if (userId) {
			fetchOrders();
		}
	}, [userId]);

	const getStatusColor = (status) => {
		switch (status) {
			case 'Completed':
			case 'Ordered':
				return 'success';
			case 'In Transit':
				return 'info';
			case 'Pending':
				return 'warning';
			default:
				return 'secondary';
		}
	};

	return (
		<Screen>
			<Container className='mt-5 mb-5'>
				<h3
					className='text-center mb-4'
					style={{ color: '#800000', fontWeight: 'bold' }}>
					🛒 My Orders
				</h3>

				{loading ? (
					<div className='text-center'>
						<Spinner
							animation='border'
							variant='primary'
						/>
					</div>
				) : orders.length === 0 ? (
					<p className='text-center text-muted'>
						You haven't placed any orders yet.
					</p>
				) : (
					<Row>
						{orders.map((order, index) => (
							<Col
								key={order._id}
								xs={12}
								md={6}
								lg={4}
								className='mb-4'>
								<Card className='shadow-sm border-0 order-card'>
									<Card.Body>
										<Card.Title
											className='mb-3'
											style={{ fontWeight: 600 }}>
											Order #{order.orderId}
										</Card.Title>

										<div className='mb-2'>
											<strong>Date:</strong>{' '}
											{new Date(order.createdAt).toLocaleDateString('en-IN', {
												day: '2-digit',
												month: 'short',
												year: 'numeric',
											})}
										</div>

										<div className='mb-2'>
											<strong>Total:</strong> ₹{order.total}
										</div>

										<div className='mb-2'>
											<strong>Payment Status:</strong>{' '}
											<Badge bg={getStatusColor(order.status)}>
												{order.status}
											</Badge>
										</div>

										<div className='mb-3'>
											<strong>Order Status:</strong>{' '}
											<Badge bg={getStatusColor('Ordered')}>Ordered</Badge>
										</div>

										<Accordion>
											<Accordion.Item eventKey='0'>
												<Accordion.Header>View Order Details</Accordion.Header>
												<Accordion.Body>
													{order.items && order.items.length > 0 ? (
														order.items.map((item, idx) => (
															<Link href={`/product/${item._id}`}>
																<div
																	key={idx}
																	className='mb-3 border-bottom pb-2'>
																	<div className='d-flex'>
																		<img
																			src={`${HOST}resources/${item.images[0]}`}
																			alt={item.title}
																			width={60}
																			height={60}
																			style={{
																				objectFit: 'cover',
																				borderRadius: 5,
																				marginRight: 10,
																			}}
																		/>
																		<div>
																			<h6 className='mb-1'>{item.title}</h6>
																			<p className='mb-0 text-muted'>
																				Quantity: {item.quantity}
																			</p>
																			<p className='mb-0 text-muted'>
																				Price: ₹{item.price}
																			</p>
																		</div>
																	</div>
																</div>
															</Link>
														))
													) : (
														<p className='text-muted'>No items found.</p>
													)}
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				)}
			</Container>
		</Screen>
	);
};

export default MyOrders;
