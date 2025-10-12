import Screen from '@/component/common/Screen';
import React, { useEffect, useState } from 'react';
import { Container, Table, Badge, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { HOST } from '@/component/apibaseurl';
import { useSelector } from 'react-redux';

const MyOrders = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const { user } = useSelector((state) => state.auth);
	// Replace this with actual user ID logic
	const userId = user?._id;

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const res = await axios.get(`${HOST}order/by-user/${userId}`);
				setOrders(res.data.orders); // Expecting array of orders
			} catch (err) {
				console.error('Failed to fetch orders:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchOrders();
	}, [userId]);

	const getStatusColor = (status) => {
		switch (status) {
			case 'Delivered':
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
			<Container className='mt-5'>
				<h3
					className='mb-4 text-center'
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
					<p className='text-center'>You haven't placed any orders yet.</p>
				) : (
					<Table
						bordered
						hover
						responsive
						className='shadow-sm'>
						<thead style={{ backgroundColor: '#800000', color: 'white' }}>
							<tr>
								<th>Order ID</th>
								<th>Date</th>
								<th>Total</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td>{order.orderId}</td>
									<td>
										{new Date(order.createdAt).toLocaleDateString('en-IN', {
											day: '2-digit',
											month: 'short',
											year: 'numeric',
										})}
									</td>
									<td>₹{order.total}</td>
									<td>
										<Badge bg={getStatusColor(order.status)}>
											{order.status}
										</Badge>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Container>
		</Screen>
	);
};

export default MyOrders;
