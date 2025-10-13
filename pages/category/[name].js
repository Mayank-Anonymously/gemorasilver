// pages/ProductByCategory.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartApi } from '@/component/redux/thunk/cartThunkApi';
import axios from 'axios';
import { HOST } from '@/component/apibaseurl';
import { useRouter } from 'next/navigation';
import FiltersResponsive from '@/component/Filterr/Sidebar';
import FilterOffCanvas from '@/component/Filterr/Offcanvasfilter';
import FilterSortSection from '@/component/common/FilterIcon';

const ProductByCategory = ({ products }) => {
	const categories = ['All', ...new Set(products.map((p) => p.categoryName))];
	const { user, loggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const router = useRouter();
	const userId = user?._id;

	// Filter states

	const [isAscending, setIsAscending] = useState(true); // Default: ascending
	const [loading, setLoading] = useState(false);
	const [activeCategory, setActiveCategory] = useState('All');
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [priceRange, setPriceRange] = useState({ from: 0, to: 160000 });
	const [selectedStoneColors, setSelectedStoneColors] = useState([]);
	const [selectedStyles, setSelectedStyles] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [show, setShow] = useState(false);

	// Filtering function
	const handleApplyFilter = () => {
		setLoading(true);
		const filtered = products.filter((p) => {
			const categoryMatch =
				activeCategory === 'All' || p.categoryName === activeCategory;

			const priceMatch =
				(!priceRange.from || p.priceSale >= priceRange.from) &&
				(!priceRange.to || p.priceSale <= priceRange.to);

			const colorMatch =
				selectedStoneColors.length === 0 ||
				selectedStoneColors.includes(p.color);

			const styleMatch = p.styleOne == p.styleOne;
			const styleMatchTwo = p.styleTwo == p.styleTwo;
			setLoading(false);
			return (
				categoryMatch && priceMatch && colorMatch && styleMatch && styleMatchTwo
			);
		});

		setShow(false);
		setFilteredProducts(filtered);
	};

	const handleResetFilter = () => {
		setActiveCategory('All');
		setPriceRange({ from: 0, to: 160000 });
		setSelectedStoneColors([]);
		setSelectedStyles([]);
		setShow(false);
		setFilteredProducts([]);
	};

	// Sorting function
	const sortProducts = (productsToSort) => {
		const sorted = [...productsToSort].sort((a, b) =>
			isAscending ? a.priceSale - b.priceSale : b.priceSale - a.priceSale
		);
		return sorted;
	};
	const baseProducts =
		filteredProducts.length > 0 ? filteredProducts : products;

	const final = sortProducts(baseProducts);

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
							handleResetFilter={handleResetFilter}
							handleApplyFilter={handleApplyFilter}
						/>
					</Col>
					{loading ? (
						<div>
							<Spinner />
						</div>
					) : (
						<Col>
							<Row>
								{final.length > 0 ? (
									final.map((p, index) => (
										<Col
											key={index}
											xs={6}
											sm={4}
											md={6}
											lg={4}
											className='justify-content-center mb-2'>
											<div
												onClick={() => router.push(`/product/${p._id}`)}
												className='product-card bg-white shadow-sm border-0 p-2 rounded-3'
												style={{
													display: 'flex',
													width: '100%',
													height: '100%',
													justifyContent: 'space-between',
													alignItems: 'center',
													flexDirection: 'column',
													cursor: 'pointer',
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
										</Col>
									))
								) : (
									<p className='text-center text-muted'>No products found.</p>
								)}
							</Row>
						</Col>
					)}
				</Row>
			</Container>

			<FilterSortSection
				setShow={setShow}
				onClickSort={() => setIsAscending((prev) => !prev)}
			/>

			{show && (
				<FilterOffCanvas
					show={show}
					handleClose={() => setShow(false)}
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
					handleResetFilter={handleResetFilter}
					handleApplyFilter={handleApplyFilter}
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
			const structuredName = name.toLowerCase().replaceAll(' ', '-');
			// Normalize category name to match URL param (slug style)
			const filterproduct = res.data.response.filter(
				(p) =>
					p.categoryName.toLowerCase().replaceAll(' ', '-') == structuredName
			);
			console.log('filterproduct:', filterproduct);
			// Normalize category name to match URL param (slug style)

			return {
				props: {
					products: filterproduct,
				},
			};
		}

		return {
			props: {
				products: [],
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
