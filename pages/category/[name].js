// pages/ProductByCategory.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import { products } from '@/component/data/products';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/component/redux/slices/cartSlice';
import { FaRegEye } from 'react-icons/fa6';
import FiltersSidebar from '@/component/Filterr/Sidebar';
import { CiHeart, CiSquarePlus } from 'react-icons/ci';
import FilterOffCanvas from '@/component/Filterr/Offcanvasfilter';
import { FaFilter } from 'react-icons/fa';

function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const update = () => setIsMobile(window.innerWidth < breakpoint);
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, [breakpoint]);

	return isMobile;
}
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

	const [show, setShow] = useState(false);

	return (
		<Screen>
			<Container className='py-5'>
				{/* Categories Nav Pills */}

				<Row>
					<Col
						md={3}
						xs={12}
						sm={4}>
						<div className='filter-mobile-menu'>
							<FiltersSidebar
								categories={categories}
								priceRange={priceRange}
								setPriceRange={setPriceRange}
							/>
						</div>
						{useIsMobile && (
							<>
								<div className='filters-placement'>
									<button className='btn bg-white text-black'>Sort </button>
									<button
										className='btn bg-white text-black'
										onClick={() => setShow(true)}>
										Filter <FaFilter />{' '}
									</button>
								</div>{' '}
							</>
						)}
					</Col>

					<Col
						xs={12}
						sm={4}
						md={9}
						lg={4}>
						<Row className='g-4'>
							{filteredProducts.length > 0 ? (
								filteredProducts.map((p, index) => (
									<Col
										key={index}
										xs={6}
										sm={4}
										md={6}
										lg={4} // full width on mobile, 2-per-row on small, etc.
										className='d-flex justify-content-center mb-4'>
										<div className='product-card bg-white shadow-sm border-0 p-2 rounded-3'>
											{/* Product Image */}
											<div
												className='justify-content-center align-items-center'
												style={{
													height: 140,
													width: 140,
													objectFit: 'contain',
												}}>
												<img
													src={p.images[0]}
													alt={p.title}
													className='img-fluid'
													// style={{ objectFit: 'contain', maxHeight: '100%' }}
												/>
											</div>
											{/* Rating */}
											<div className='d-flex align-items-between justify-content-start mt-3 review'>
												<span className='fw-bold me-1'>5.0</span>
												<IoIosStar color={'gold'} />

												<span className='ms-1 text-muted'>| 15</span>
											</div>
											{/* Price */}
											<div className='d-flex justify-content-start mt-2 flex-wrap'>
												<h5 className='mb-0 fw-bold text-dark me-2 product-price'>
													₹{p.price.toLocaleString()}
												</h5>
												<p className='mb-0 text-muted text-decoration-line-through product-price-compare'>
													₹{p.compare_at_price.toLocaleString()}
												</p>
											</div>
											{/* Title */}
											<h6 className=' product-tile-title'>{p.title}</h6>
											<div className='d-flex product-all-tiles justify-content-between'>
												<Link
													href={''}
													className='btn  fw-semibold cursor-pointer'
													style={{
														backgroundColor: '#ffd6e1',
														color: '#000',
														borderRadius: 8,
														marginTop: 10,
													}}
													onClick={() => handleAddtoCart(p)}>
													<CiSquarePlus size={20} />
												</Link>
											</div>
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
			{show && (
				<FilterOffCanvas
					show={show}
					handleClose={() => setShow(false)}
					categories={categories}
					priceRange={priceRange}
					setPriceRange={setPriceRange}
				/>
			)}
		</Screen>
	);
};

export default ProductByCategory;
