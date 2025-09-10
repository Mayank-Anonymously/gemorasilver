import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
	{
		id: 1,
		img: '/assets/product/necklace.png',
		name: 'Z 7-8mm Freshwater Button is',
		price: 239.52,
		oldPrice: 362.0,
		rating: 4,
		reviews: 126,
		link: '/product/1',

		discount: '-14%',
	},
	{
		id: 2,
		img: '/assets/product/necklace.png',
		name: 'Lorem, ipsum dolor sit ame elit.',
		price: 215.52,
		oldPrice: 320.0,
		rating: 3,
		reviews: 126,
		link: '/product/2',

		discount: null,
	},
	{
		id: 3,
		img: '/assets/product/necklace.png',
		name: 'Cotur, cing elit. Doloque, beatae.',
		price: 100.52,
		oldPrice: 390.0,
		rating: 3,
		reviews: 126,
		link: '/product/3',

		discount: '-14%',
	},
	{
		id: 4,
		img: '/assets/product/necklace.png',
		name: 'Z 7-8mm Freshw Button Pearl',
		price: 239.52,
		oldPrice: 362.0,
		rating: 4,
		reviews: 126,
		link: '/product/4',
	},
	{
		id: 5,
		img: '/assets/product/necklace.png',
		name: 'Quis nihil modi dn venia vel ac?',
		price: 190.52,
		oldPrice: 250.0,
		rating: 3,
		reviews: 126,
		link: '/product/5',
	},
	{
		id: 6,
		img: '/assets/product/necklace.png',
		name: 'Unde quaerat minus ipsa excei!',
		price: 179.52,
		oldPrice: 190.0,
		rating: 3,
		reviews: 126,
		link: '/product/6',

		discount: '-14%',
	},
	{
		id: 7,
		img: '/assets/product/necklace.png',
		name: 'Sed impedit autem min ver velit?',
		price: 220.52,
		oldPrice: 330.0,
		rating: 3,
		reviews: 126,
		link: '/product/7',

		discount: '-14%',
	},
	{
		id: 8,
		img: '/assets/product/necklace.png',
		name: 'Alias facilis ut natus beatae.',
		price: 239.52,
		oldPrice: 362.0,
		rating: 4,
		reviews: 126,
		link: '/product/8',
	},
];

const TrendingProductSection = () => {
	return (
		<Container className='py-5'>
			<h3 className='text-center fw-bold mb-4'>TRENDING PRODUCT</h3>
			<Row>
				{products.map((product) => (
					<Col
						key={product.id}
						xs={6}
						sm={8}
						md={4}
						lg={3}	
						data-aos='fade-down'
						className='mb-4 product-cards'>
						<Link
							href={product.link}
							className='text-decoration-none'>
							<Card className='h-100 shadow-sm position-relative'>
								{product.discount && (
									<span
										className='badge bg-danger position-absolute'
										style={{ top: '10px', left: '10px' }}>
										{product.discount}
									</span>
								)}
								<Card.Img
									variant='top'
									src={product.img}
									style={{
										objectFit: 'contain',
										height: '150px',
										padding: '1rem',
									}}
								/>
								<Card.Body className='text-center'>
									<div
										className='mb-1 review-card'
										style={{ fontSize: '14px', color: '#999' }}>
										{'★'.repeat(product.rating) +
											'☆'.repeat(5 - product.rating)}{' '}
										({product.reviews} Review)
									</div>
									<Card.Title style={{ fontSize: '15px' }}>
										{product.name}
									</Card.Title>
									<div className='fw-bold text-danger price-line'>
										${product.price.toFixed(2)}{' '}
										<span className='text-muted text-decoration-line-through ms-1'>
											${product.oldPrice.toFixed(2)}
										</span>
									</div>
								</Card.Body>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default TrendingProductSection;
