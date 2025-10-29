import { HOST } from '@/component/apibaseurl';
import Screen from '@/component/common/Screen';
import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MyAddress = () => {
	const { user } = useSelector((state) => state.auth);
	const [addresses, setAddresses] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	console.log(user);
	const userId = user?._id;
	const [newAddress, setNewAddress] = useState({
		userId: userId, // optional: include if backend expects it
		street: '',
		city: '',
		state: '',
		zip: '',
		country: 'INDIA',
	});

	// ✅ Save Address API Call
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

	// ✅ Add new address handler
	const handleAddAddress = async () => {
		if (!newAddress.street || !newAddress.city) {
			alert('Street and City are required');
			return;
		}

		const saved = await saveAddressApi(newAddress);

		if (saved) {
			setAddresses((prev) => [...prev, newAddress]);
			setShowModal(false);
			setNewAddress({
				userId: '',
				street: '',
				city: '',
				state: '',
				zip: '',
				country: 'INDIA',
			});
		}
	};

	// ✅ Optional: fetch all saved addresses for this user

	const fetchAddresses = async () => {
		try {
			const res = await axios.get(`${HOST}address/list/${user?._id}`);
			console.log(res.data);
			setAddresses(res.data.addresses || []);
		} catch (error) {
			console.error('Error fetching addresses:', error.message);
		}
	};

	useEffect(() => {
		fetchAddresses();
	}, []);

	return (
		<Screen>
			<Container className='mt-5'>
				<h3
					className='text-center mb-4'
					style={{ color: '#800000', fontWeight: 'bold' }}>
					🏠 My Saved Addresses
				</h3>

				<div className='d-flex flex-wrap gap-3 justify-content-center'>
					{addresses.length > 0 ? (
						addresses.map((addr, index) => (
							<Card
								key={index}
								style={{ width: '18rem', borderColor: '#800000' }}
								className='shadow'>
								<Card.Body>
									<Card.Title style={{ color: '#800000', fontWeight: '600' }}>
										{addr.city}, {addr.state || '—'}
									</Card.Title>
									<Card.Text>
										{addr.street}
										<br />
										Zip: {addr.zip || '—'}
										<br />
										Country: {addr.country}
									</Card.Text>
								</Card.Body>
							</Card>
						))
					) : (
						<p className='text-center mt-3'>No addresses saved yet.</p>
					)}
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

				{/* Modal for adding address */}
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
							{['street', 'city', 'state', 'zip', 'country'].map((field) => (
								<Form.Group
									className='mb-3'
									key={field}>
									<Form.Label className='text-capitalize'>{field}</Form.Label>
									<Form.Control
										value={newAddress[field]}
										onChange={(e) =>
											setNewAddress({ ...newAddress, [field]: e.target.value })
										}
										required={field === 'street' || field === 'city'}
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
							onClick={handleAddAddress}
							disabled={loading}>
							{loading ? 'Saving...' : 'Save'}
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		</Screen>
	);
};

export default MyAddress;
