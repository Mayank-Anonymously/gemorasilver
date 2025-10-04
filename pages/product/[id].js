import ProductImagesGallery from '@/component/product/Product';
import { Row, Col, Accordion } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import Head from 'next/head';
import { FaHeart } from 'react-icons/fa';
import { PiRulerBold } from 'react-icons/pi';
import {
	addToCart,
	buyNow,
	decrementQty,
	incrementQty,
} from '@/component/redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addToCartApi } from '@/component/redux/thunk/cartThunkApi';
import { HOST } from '@/component/apibaseurl';
import axios from 'axios';
import NewColllection from '@/component/home/NewCollection';
import FooterInfo from '@/component/common/FooterInfo';
import { IoIosStar } from 'react-icons/io';
import ShareButton from '@/component/Share/shareButton';
import { useState } from 'react';
import SizeChartModal from '@/component/Size/Sizechart';
import ReviewSection from '@/component/ReviewSection';
import { addTowishlistApi } from '@/component/redux/thunk/wishlistThunkApi';

export default function ProductPage({ product, products }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const { user, loggedIn } = useSelector((state) => state.auth);
	const [showSizeChart, setShowSizeChart] = useState(false);
	const userId = user?._id;

	const cartItems = useSelector((state) => state.cart.items);

	if (!product) return <p>Product not found</p>;

	return (
		<Screen>
			<div className='container mt-5'>
				<Head>
					<title>{product.title}</title>
					<meta
						name='description'
						content={product.description}
					/>
				</Head>

				<div>
					<a
						href='/'
						className='text-decoration-none text-black fw-bold'>
						<span>Home / </span>
					</a>
					<span>{product.categoryName} / </span>
					<span>{product.title}</span>
				</div>

				<Row className='mt-4'>
					<Col md={6}>
						<ProductImagesGallery images={product.image} />
						<div className='size-scale mt-3 d-flex justify-content-end align-items-end'>
							{product.categoryName === 'RINGS' && (
								<h6 onClick={() => setShowSizeChart(true)}>
									<PiRulerBold color={'#812d3e'} /> Size
								</h6>
							)}
						</div>
					</Col>

					<Col md={6}>
						<h2 className='mb-3'>{product.title}</h2>
						{/* <p className='text-muted'>SKU: {product.productSku}</p> */}
						<h4 className='text-black mb-3'>
							₹{product.priceSale}
							<small className='text-muted'>
								<small
									style={{
										textDecoration: 'line-through',
										fontWeight: '400',
										marginLeft: 10,
									}}>
									₹{product.price}
								</small>
							</small>
						</h4>
						<div className='d-flex align-items-center justify-content-between mt-3 review'>
							<div>
								<span className='fw-bold me-1'>5.0</span>
								<IoIosStar color={'gold'} />
								<span className='ms-1 text-muted'>| 15</span>
							</div>

							<div className='d-flex align-items-center justify-content-between'>
								<div className='d-none d-xs-none d-flex'>
									{product.categoryName === 'RINGS' && (
										<h6 onClick={() => setShowSizeChart(true)}>
											<PiRulerBold color={'#812d3e'} /> Size
										</h6>
									)}
								</div>
								<button
									className='btn'
									onClick={() => addTowishlistApi(userId, product, dispatch)}>
									<FaHeart color='#4c1d1d' />
								</button>

								<ShareButton
									title='Awesome Article'
									text='Check out this article I found!'
									url={window.location.href}
								/>
							</div>
						</div>
						<FooterInfo />
						{cartItems
							.filter((itx) => itx.id === product._id)
							.map((item) => (
								<div className='d-flex justify-content-between align-items-center mb-2'>
									<div className='d-flex align-items-center gap-2'>
										<button
											className='btn btn-lg rounded-circle'
											onClick={() => dispatch(decrementQty(item.id))}>
											−
										</button>
										<span className='fw-bold'>{item.quantity}</span>
										<button
											className='btn btn-lg rounded-circle'
											onClick={() => dispatch(incrementQty(item.id))}>
											+
										</button>
									</div>
								</div>
							))}

						<div className='product-detail-page-button'>
							<button
								className='btn add-to-cart'
								onClick={() => {
									if (loggedIn === false) {
										alert('Please login to add product to cart.');
										router.push('/auth/login');
									} else {
										addToCartApi(userId, product, dispatch);
									}
								}}>
								Add to Cart
							</button>

							<button
								className='btn buy-now'
								onClick={() => {
									router.push('/product/checkout');
									dispatch(buyNow({ product }));
								}}>
								Buy Now
							</button>
						</div>
						<Accordion
							alwaysOpen
							className='mt-3'>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>
									<h6
										className='fw-bold m-0'
										style={{ color: '#6a2a42' }}>
										Product Description
									</h6>
								</Accordion.Header>
								<Accordion.Body>
									<p>{product.description}</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</div>
			<NewColllection
				products={products}
				heading={
					<h2
						style={{
							color: '#812d3e',
							fontFamily: "'Great Vibes', cursive",
							marginTop: 10,
						}}>
						More Suggestions
					</h2>
				}
			/>
			<ReviewSection />

			{showSizeChart && <SizeChartModal setShowSizeChart={setShowSizeChart} />}
		</Screen>
	);
}

// Fetch product by ID from params

export async function getServerSideProps(context) {
	const { id } = context.query;

	try {
		const res = await axios.get(`${HOST}product/${id}/getProductById`);
		const resss = await axios.get(`${HOST}product/getAllProducts`);

		return {
			props: {
				product: res.data.response || null, // adjust based on your API response
				products: resss.data.response || null, // adjust based on your API response
			},
		};
	} catch (error) {
		console.error('Error fetching product:', error.message);
		return {
			props: {
				product: null,
			},
		};
	}
}
