import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
	return (
		<Card className='h-100'>
			<Card.Img
				variant='top'
				src={product.img}
				style={{ objectFit: 'contain', height: '200px' }}
			/>
			<Card.Body>
				<Card.Title style={{ fontSize: '1rem' }}>{product.name}</Card.Title>
				<div className='d-flex align-items-center mb-2'>
					{[...Array(5)].map((_, i) => (
						<FaStar
							key={i}
							size={14}
							color={i < product.rating ? '#ffc107' : '#e4e5e9'}
						/>
					))}
					<small className='ms-2 text-muted'>(120) Review</small>
				</div>
				<div>
					<strong className='text-danger'>${product.price}</strong>{' '}
					<del className='text-muted'>${product.oldPrice}</del>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
