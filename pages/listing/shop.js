// pages/ProductByCategory.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap';
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
import FiltersResponsive from '@/component/Filterr/Sidebar';
import FilterSortSection from '@/component/common/FilterIcon';

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

const AllProduct = ({ products, filterproduct }) => {
	const categories = ['All', ...new Set(products.map((p) => p.categoryName))];
	const { user, loggedIn } = useSelector((state) => state.auth);
	const router = useRouter();
	const dispatch = useDispatch();
	const userId = user?._id;

	// Filter states
	const [activeCategory, setActiveCategory] = useState('All');
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [priceRange, setPriceRange] = useState({ from: 0, to: 160000 });
	const [selectedStoneColors, setSelectedStoneColors] = useState([]);
	const [selectedStyles, setSelectedStyles] = useState([]);
	const [show, setShow] = useState(false);

	// Pagination states
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 9; // Number of products per page

	// Filtering
	const filteredProducts = products.filter((p) => {
		const categoryMatch =
			activeCategory === 'All' || p.categoryName === activeCategory;
		const priceMatch =
			(!priceRange.from || p.priceSale >= priceRange.from) &&
			(!priceRange.to || p.priceSale <= priceRange.to);
		const colorMatch =
			selectedStoneColors.length === 0 || selectedStoneColors.includes(p.color);
		const styleMatch =
			selectedStyles.length === 0 || selectedStyles.includes(p.style);
		return categoryMatch && priceMatch && colorMatch && styleMatch;
	});

	const final = filteredProducts;

	// Pagination logic
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = final.slice(indexOfFirstProduct, indexOfLastProduct);

	const totalPages = Math.ceil(final.length / productsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Screen>
			<Container className='py-5'>
				<Row>
					<Col
						className='d-none d-md-block d-lg-block'
						md={3}
						xs={12}
						sm={4}>
						<FiltersResponsive
							categories={categories}
							selectedCategories={selectedCategories}
							setSelectedCategories={setSelectedCategories}
							priceRange={priceRange}
							setPriceRange={setPriceRange}
							activeCategory={activeCategory}
							setActiveCategory={setActiveCategory}
							selectedStoneColors={selectedStoneColors}
							setSelectedStoneColors={setSelectedStoneColors}
							selectedStyles={selectedStyles}
							setSelectedStyles={setSelectedStyles}
						/>
					</Col>

					<Col>
						<Row>
							{currentProducts.length > 0 ? (
								currentProducts.map((p, index) => (
									<Col
										key={index}
										xs={6}
										sm={4}
										md={6}
										lg={4}
										className='justify-content-center mb-2'>
										<Link
											href={`/product/${p._id}`}
											className='text-decoration-none text-black'>
											<div
												className='product-card bg-white shadow-sm border-0 p-2 rounded-3'
												style={{
													display: 'flex',
													width: '100%',
													height: '100%',
													justifyContent: 'space-between',
													alignItems: 'center',
													flexDirection: 'column',
												}}>
												<img
													src={`${HOST}resources/${p.image}`}
													alt={p.title}
													className='img-fluid'
												/>
												<div className='w-100'>
													<div className='d-flex align-items-between justify-content-start mt-3 review'>
														<span className='fw-bold me-1'>5.0</span>
														<IoIosStar color={'gold'} />
														<span className='ms-1 text-muted'>| 15</span>
													</div>
													<div className='d-flex justify-content-start mt-2 flex-wrap'>
														<h5 className='mb-0 fw-bold text-dark me-2 product-price'>
															₹{p.priceSale}
														</h5>
														<p className='mb-0 text-muted text-decoration-line-through product-price-compare'>
															₹{p.price}
														</p>
													</div>
													<h6 className='product-tile-title'>{p.title}</h6>
													<div className='d-flex product-all-tiles justify-content-between'>
														<Link
															href={`/product/${p._id}`}
															className='btn fw-semibold cursor-pointer'
															style={{
																backgroundColor: '#4c1d1d',
																color: 'white',
																borderRadius: 8,
																marginTop: 10,
															}}
															onClick={(e) => {
																e.preventDefault();
																if (!loggedIn) {
																	alert('Please login before adding to cart.');
																	router.push('/auth/login');
																} else {
																	addToCartApi(userId, p, dispatch);
																}
															}}>
															Add to Cart
														</Link>
													</div>
												</div>
											</div>
										</Link>
									</Col>
								))
							) : (
								<p className='text-center text-muted'>No products found.</p>
							)}
						</Row>

						{/* Pagination Controls */}
						{totalPages > 1 && (
							<div className='d-flex justify-content-center mt-4'>
								<Pagination>
									<Pagination.Prev
										disabled={currentPage === 1}
										onClick={() => handlePageChange(currentPage - 1)}
									/>
									{[...Array(totalPages)].map((_, index) => (
										<Pagination.Item
											key={index + 1}
											active={index + 1 === currentPage}
											onClick={() => handlePageChange(index + 1)}>
											{index + 1}
										</Pagination.Item>
									))}
									<Pagination.Next
										disabled={currentPage === totalPages}
										onClick={() => handlePageChange(currentPage + 1)}
									/>
								</Pagination>
							</div>
						)}
					</Col>
				</Row>
			</Container>
			<FilterSortSection setShow={setShow} />
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

export default AllProduct;

export async function getServerSideProps(context) {
	try {
		const res = await axios.get(`${HOST}product/getAllProducts`);
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
