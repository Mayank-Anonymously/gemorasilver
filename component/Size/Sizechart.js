import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const SizeChartModal = ({ setShowSizeChart }) => {
	const [show, setShow] = useState(true);

	const handleClose = () => {
		setShowSizeChart(false);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				centered
				size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>Size Chart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img
						src='/assets/size_chart.jpg'
						className='img-fluid'
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default SizeChartModal;
