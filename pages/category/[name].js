// pages/ProductByCategory.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/component/redux/slices/cartSlice';
import FiltersSidebar from '@/component/Filterr/Sidebar';

import FilterOffCanvas from '@/component/Filterr/Offcanvasfilter';
import { FaFilter } from 'react-icons/fa';
import { addToCartApi } from '@/component/redux/thunk/cartThunkApi';
import axios from 'axios';
import { HOST } from '@/component/apibaseurl';
import { useRouter } from 'next/navigation';

function useIsMobile(breakpoint = 568) {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const update = () => setIsMobile(window.innerWidth < breakpoint);
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, [breakpoint]);

	return isMobile;
}

const ProductByCategory = ({ products, filterproduct }) => {
	const categories = ['All', ...new Set(products.map((p) => p.categoryName))];
	const { user, loggedIn } = useSelector((state) => state.auth);
	const router = useRouter();
	const userId = user?._id;
	// State
	const [activeCategory, setActiveCategory] = useState('All');

	const [priceRange, setPriceRange] = useState({ from: '', to: '' });
	const [onlyTopRated, setOnlyTopRated] = useState(false);
	const dispatch = useDispatch();

	// Filtering logic
	const filteredProducts = products.filter((p) => {
		const categoryMatch =
			activeCategory === 'All' || p.categoryName === activeCategory;

		return categoryMatch;
	});

	const [show, setShow] = useState(false);
	const final = filterproduct ? filterproduct : filteredProducts;

	return (
		<Screen>
			<Container className='py-5'>
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
								setActiveCategory={setActiveCategory}
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

					<Col>
						<Row>
							{final.length > 0 ? (
								final.map((p, index) => (
									<Col
										key={index}
										xs={6}
										sm={4}
										md={6}
										lg={4} // full width on mobile, 2-per-row on small, etc.
										className='justify-content-center mb-2'>
										<div
											onClick={() => {
												router.push('/auth/login');
											}}
											className='product-card bg-white shadow-sm border-0 p-2 rounded-3'
											style={{
												display: 'flex',
												width: '100%',
												height: '100%',
												justifyContent: 'space-between',
												alignItems: 'center',
												flexDirection: 'column',
											}}>
											{/* Product Image */}

											<img
												src={`${HOST}resources/${p.image}`}
												alt={p.title}
												className='img-fluid'
											/>

											<div className='w-100'>
												{/* Rating */}
												<div className='d-flex align-items-between justify-content-start mt-3 review'>
													<span className='fw-bold me-1'>5.0</span>
													<IoIosStar color={'gold'} />

													<span className='ms-1 text-muted'>| 15</span>
												</div>
												{/* Price */}
												<div className='d-flex justify-content-start mt-2 flex-wrap'>
													<h5 className='mb-0 fw-bold text-dark me-2 product-price'>
														₹{p.priceSale}
													</h5>
													<p className='mb-0 text-muted text-decoration-line-through product-price-compare'>
														₹{p.price}
													</p>
												</div>
												{/* Title */}
												<h6 className=' product-tile-title'>{p.title}</h6>

												<div className='d-flex product-all-tiles justify-content-between'>
													<Link
														href={`/product/${p._id}`}
														className='btn  fw-semibold cursor-pointer'
														style={{
															backgroundColor: '#4c1d1d',
															color: 'white',
															borderRadius: 8,
															marginTop: 10,
														}}
														onClick={() => {
															if (loggedIn === true) {
																alert(
																	'Please Loggin Before Add Product to cart.'
																);
																router.push('/auth/login');
															} else {
																dispatch(addToCart(p));
																addToCartApi(userId, p, dispatch);
															}
														}}>
														Add to Cart
													</Link>
												</div>
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

export async function getServerSideProps(context) {
	const { name } = context.query;

	try {
		const res = await axios.get(`${HOST}product/getAllProducts`);

		if (Array.isArray(res.data.response)) {
			// Normalize both categoryName and query to match
			const filterproduct = res.data.response.filter(
				(p) => p.categoryName.replaceAll(' ', '-').toLowerCase() === name
			);
			//  var filtercat = filterproduct.filter
			console.log(filterproduct);
			// var filtercat = filterproduct.filter((item) => item === name);
			return {
				props: {
					products: res.data.response || [],
					filterproduct: filterproduct,
				},
			};
		}

		return {
			props: {
				products: res.data.response || [],
				filterproduct: [],
			},
		};
	} catch (error) {
		console.error('Error fetching products:', error.message);
		return {
			props: {
				products: [],
				filterproduct: [],
			},
		};
	}
}
