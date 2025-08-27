import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTruck, FaHeadset, FaUndo, FaLock } from 'react-icons/fa';

const FooterInfo = () => {
	const infoItems = [
		{
			icon: <FaTruck />,
			title: 'Free Shipping',
			desc: 'Free shipping over ₹200',
		},
		{
			icon: <FaHeadset />,
			title: 'Support 24/7',
			desc: 'Contact us 24 hours a day',
		},
		{
			icon: <FaUndo />,
			title: '100% Money Back',
			desc: '',
		},
		{
			icon: <FaLock />,
			title: 'Payment Secure',
			desc: 'We ensure secure payment',
		},
	];

	return (
		<Container className='py-4 border-top mt-4'>
			<Row className='text-center'>
				{infoItems.map((item, idx) => (
					<Col
						data-aos='fade-left'
						key={idx}
						md={3}
						sm={6}
						xs={12}
						className='mb-3'>
						<div style={{ fontSize: '1.5rem', color: '#333' }}>{item.icon}</div>
						<h6 className='mt-2'>{item.title}</h6>
						<small className='text-muted'>{item.desc}</small>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default FooterInfo;
