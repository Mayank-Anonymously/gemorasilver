// pages/ProductByCategory.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import { products } from '@/component/data/products';
import FooterInfo from '@/component/common/FooterInfo';

const ProductByCategory = () => {
	// Extract unique values
	const categories = ['All', ...new Set(products.map((p) => p.category))];
	const dietaryNeeds = [...new Set(products.flatMap((p) => p.dietary))];

	// State
	const [activeCategory, setActiveCategory] = useState('All');
	const [selectedDietary, setSelectedDietary] = useState([]);
	const [priceRange, setPriceRange] = useState({ from: '', to: '' });
	const [onlyTopRated, setOnlyTopRated] = useState(false);

	// Filtering logic
	const filteredProducts = products.filter((p) => {
		const categoryMatch =
			activeCategory === 'All' || p.category === activeCategory;

		const dietaryMatch =
			selectedDietary.length === 0 ||
			p.dietary?.some((d) => selectedDietary.includes(d));

		const priceMatch =
			(!priceRange.from || p.price >= parseFloat(priceRange.from)) &&
			(!priceRange.to || p.price <= parseFloat(priceRange.to));

		const ratingMatch = !onlyTopRated || p.rating >= 4;

		return categoryMatch && dietaryMatch && priceMatch && ratingMatch;
	});

	// Handlers
	const handleDietaryChange = (diet) => {
		setSelectedDietary((prev) =>
			prev.includes(diet) ? prev.filter((d) => d !== diet) : [...prev, diet]
		);
	};

	return (
		<Screen>
			<Container
				fluid
				className='py-4'>
				{/* Categories Nav Pills */}
				<Nav
					className='justify-content-center mb-4 '
					variant='pills'
					activeKey={activeCategory}>
					{categories.map((cat) => (
						<Nav.Item key={cat}>
							<Nav.Link
								eventKey={cat}
								onClick={() => setActiveCategory(cat)}
								className='bg-dark m-4'>
								{cat}
							</Nav.Link>
						</Nav.Item>
					))}
				</Nav>

				<Row>
					{/* Products Section */}
					<Col md={12}>
						<Row
							xs={1}
							sm={2}
							md={3}
							className='g-4'>
							{filteredProducts.length > 0 ? (
								filteredProducts.map((p) => (
									<Col key={p.id}>
										<Card className='h-100 shadow-sm border-0'>
											<Card.Img
												variant='top'
												src={p.img}
												alt={p.name}
												style={{ height: '200px', objectFit: 'contain' }}
											/>
											<Card.Body className='text-center'>
												<Card.Title className='fw-bold'>{p.name}</Card.Title>
												<Card.Text className='text-muted'>${p.price}</Card.Text>
												<Card.Text>⭐ {p.rating}</Card.Text>
												<Button
													variant='dark'
													size='sm'
													href='/product/3'>
													View Details
												</Button>
											</Card.Body>
										</Card>
									</Col>
								))
							) : (
								<p className='text-center text-muted'>No products found.</p>
							)}
						</Row>
					</Col>
				</Row>
			</Container>
		</Screen>
	);
};

export default ProductByCategory;
