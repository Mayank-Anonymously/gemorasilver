import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTools, FaHeadset, FaGem, FaShieldAlt } from 'react-icons/fa';
import { GiNecklaceDisplay } from 'react-icons/gi';
import { TbShieldStar } from 'react-icons/tb';
import { GiBigDiamondRing } from 'react-icons/gi';

const FooterInfo = () => {
	const infoItems = [
		{
			icon: (
				<img
					width='35'
					height='35'
					src='https://img.icons8.com/hands/100/diamond-care.png'
					alt='diamond-care'
				/>
			), // 🛠 Easy Maintenance
			title: 'Easy Maintenance',
		},
		{
			icon: (
				<TbShieldStar
					size='24'
					className='mt-2'
				/>
			), // 🎧 Warranty / Support
			title: '6 Month Warranty',
		},
		{
			icon: <GiBigDiamondRing size='25' />, // 💍 Jewelry/Silver
			title: 'Fine 925 Silver',
		},
		{
			icon: <GiNecklaceDisplay size='25' />, // 🛡 Skin-safe / Protection
			title: 'Skin Safe Jewellery',
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
						xs={6}
						className='mb-3'>
						<div>{item.icon}</div>
						<p>{item.title}</p>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default FooterInfo;
