// pages/ProductByCategory.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import { products } from '@/component/data/products';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/component/redux/slices/cartSlice';

const ProductByCategory = () => {
	// Extract unique values
	const categories = ['All', ...new Set(products.map((p) => p.category))];
	const dietaryNeeds = [...new Set(products.flatMap((p) => p.dietary))];

	// State
	const [activeCategory, setActiveCategory] = useState('All');
	const [selectedDietary, setSelectedDietary] = useState([]);
	const [priceRange, setPriceRange] = useState({ from: '', to: '' });
	const [onlyTopRated, setOnlyTopRated] = useState(false);
	const dispatch = useDispatch();
	const [showCounter, setShowCounter] = useState(false);
	const handleAddtoCart = (sampleProduct) => {
		setShowCounter(true);

		dispatch(addToCart(sampleProduct));
	};
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
				className='py-4'
				style={{ background: 'rgb(255 250 250)' }}>
				{/* Categories Nav Pills */}
				<div
					style={{
						overflowX: 'auto',
						whiteSpace: 'nowrap',
					}}>
					<Nav
						variant='pills'
						activeKey={activeCategory}
						className='flex-row mb-4'>
						{categories.map((cat) => (
							<Nav.Item
								key={cat}
								style={{ display: 'inline-block' }}>
								<Nav.Link
									eventKey={cat}
									onClick={() => setActiveCategory(cat)}
									className='bg-white m-2'>
									{cat}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</div>

				<Row>
					<Col md={12}>
						<Row className='g-4'>
							{filteredProducts.length > 0 ? (
								filteredProducts.map((p, index) => (
									<Col
										key={index}
										xs={12}
										sm={4}
										md={4}
										lg={3} // full width on mobile, 2-per-row on small, etc.
										className='d-flex justify-content-center mb-4'>
										<div
											className='product-card bg-white shadow-sm border-0 p-3 rounded-3'
											style={{ width: '80%' }}>
											{' '}
											{/* maxWidth keeps card neat on large screens */}
											{/* Wishlist Icon */}
											<button
												className='position-absolute top-0 end-0 m-2 border-0 bg-transparent'
												aria-label='Add to wishlist'>
												<i className='bi bi-heart fs-4 text-muted'></i>
											</button>
											{/* Product Image */}
											<div
												className='d-flex justify-content-center align-items-center'
												style={{ height: 300, overflow: 'hidden' }}>
												<img
													src={p.images[0]}
													alt={p.title}
													className='img-fluid'
													style={{ objectFit: 'contain', maxHeight: '100%' }}
												/>
											</div>
											{/* Rating */}
											<div className='d-flex align-items-between justify-content-start mt-3'>
												<span className='fw-bold me-1'>5.0</span>
												<IoIosStar color={'gold'} />

												<span className='ms-1 text-muted'>| 15</span>
											</div>
											{/* Price */}
											<div className='d-flex justify-content-start mt-2 flex-wrap'>
												<h5 className='mb-0 fw-bold text-dark me-2'>
													₹{p.price.toLocaleString()}
												</h5>
												<p className='mb-0 text-muted text-decoration-line-through'>
													₹{p.compare_at_price.toLocaleString()}
												</p>
											</div>
											{/* Title */}
											<h6 className='mt-2 px-2'>{p.title}</h6>
											{/* Offer Text */}
											{/* Add to Cart */}
											<button
												className='btn w-100 fw-semibold cursor-pointer'
												style={{
													backgroundColor: '#ffd6e1',
													color: '#000',
													borderRadius: 8,
												}}
												onClick={() => handleAddtoCart(p)}>
												Add to Cart
											</button>
											<Link
												className='btn w-100 fw-semibold'
												style={{
													backgroundColor: '#ffd6e1',
													color: '#000',
													borderRadius: 8,
													marginTop: 10,
												}}
												href={`/product/${p.id}`}>
												View Product
											</Link>
										</div>
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
