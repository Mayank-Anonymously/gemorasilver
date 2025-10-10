import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';

const MyOrders = () => {
	const orders = [
		{ id: 'ORD12345', date: '2025-09-21', total: '$120', status: 'Delivered' },
		{ id: 'ORD12346', date: '2025-10-02', total: '$90', status: 'In Transit' },
		{ id: 'ORD12347', date: '2025-10-08', total: '$60', status: 'Pending' },
	];

	const getStatusColor = (status) => {
		switch (status) {
			case 'Delivered':
				return 'success';
			case 'In Transit':
				return 'info';
			default:
				return 'warning';
		}
	};

	return (
		<Container className='mt-5'>
			<h3
				className='mb-4 text-center'
				style={{ color: '#800000', fontWeight: 'bold' }}>
				🛒 My Orders
			</h3>

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
						<tr key={order.id}>
							<td>{order.id}</td>
							<td>{order.date}</td>
							<td>{order.total}</td>
							<td>
								<Badge bg={getStatusColor(order.status)}>{order.status}</Badge>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default MyOrders;
