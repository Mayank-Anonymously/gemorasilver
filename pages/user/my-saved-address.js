import Screen from '@/component/common/Screen';
import React, { useState } from 'react';
import { Container, Card, Button, Form, Modal } from 'react-bootstrap';

const MyAddress = () => {
	const [addresses, setAddresses] = useState([
		{
			name: 'John Doe',
			address: '123 Main St, New York, USA',
			zip: '10001',
			phone: '+1 555-1234',
		},
	]);
	const [showModal, setShowModal] = useState(false);
	const [newAddress, setNewAddress] = useState({
		name: '',
		address: '',
		zip: '',
		phone: '',
	});

	const handleAddAddress = () => {
		setAddresses([...addresses, newAddress]);
		setShowModal(false);
		setNewAddress({ name: '', address: '', zip: '', phone: '' });
	};

	return (
		<Screen>
			<Container className='mt-5'>
				<h3
					className='text-center mb-4'
					style={{ color: '#800000', fontWeight: 'bold' }}>
					🏠 My Saved Addresses
				</h3>

				<div className='d-flex flex-wrap gap-3 justify-content-center'>
					{addresses.map((addr, index) => (
						<Card
							key={index}
							style={{ width: '18rem', borderColor: '#800000' }}
							className='shadow'>
							<Card.Body>
								<Card.Title style={{ color: '#800000', fontWeight: '600' }}>
									{addr.name}
								</Card.Title>
								<Card.Text>
									{addr.address}
									<br />
									Zip: {addr.zip}
									<br />
									Phone: {addr.phone}
								</Card.Text>
							</Card.Body>
						</Card>
					))}
				</div>

				<div className='text-center mt-4'>
					<Button
						style={{
							backgroundColor: '#800000',
							borderColor: '#800000',
							padding: '10px 20px',
						}}
						onClick={() => setShowModal(true)}>
						Add New Address
					</Button>
				</div>

				<Modal
					show={showModal}
					onHide={() => setShowModal(false)}>
					<Modal.Header
						closeButton
						style={{ backgroundColor: '#800000', color: 'white' }}>
						<Modal.Title>Add New Address</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							{['name', 'address', 'zip', 'phone'].map((field) => (
								<Form.Group
									className='mb-3'
									key={field}>
									<Form.Label className='text-capitalize'>{field}</Form.Label>
									<Form.Control
										value={newAddress[field]}
										onChange={(e) =>
											setNewAddress({ ...newAddress, [field]: e.target.value })
										}
									/>
								</Form.Group>
							))}
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={() => setShowModal(false)}>
							Cancel
						</Button>
						<Button
							style={{ backgroundColor: '#800000', borderColor: '#800000' }}
							onClick={handleAddAddress}>
							Save
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		</Screen>
	);
};

export default MyAddress;
