import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SaleModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Modal
			show={show}
			onHide={handleClose}
			centered
			size='lg'
			dialogClassName='sale-modal'>
			<a href='/listing/shop'>
				<Modal.Body className='p-0'>
					<img
						src='/assets/sale/discount.webp'
						alt='sale-banner'
						className='img-fluid sale-image'
					/>
				</Modal.Body>
			</a>
		</Modal>
	);
}

export default SaleModal;
