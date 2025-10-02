import ProductImagesGallery from '@/component/product/Product';
import { Row, Col } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import Head from 'next/head';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { products } from '@/component/data/products';
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

export default function ProductPage({ product }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const { user, loggedIn } = useSelector((state) => state.auth);
	const userId = user?._id;
	const cartItems = useSelector((state) => state.cart.items);
	const cartChecked = cartItems.find((item) => item._id === product._id);
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
						className='text-decoration-none'>
						<span>Home / </span>
					</a>
					<span>{product.categoryName} / </span>
					<span>{product.title}</span>
				</div>

				<Row className='mt-4'>
					<Col md={6}>
						<ProductImagesGallery images={product.image} />
					</Col>

					<Col md={6}>
						<h2 className='mb-3'>{product.title}</h2>
						<p className='text-muted'>SKU: {product.productSku}</p>
						<h4 className='text-primary mb-3'>
							₹{product.priceSale}{' '}
							<small className='text-muted'>
								<s>₹{product.price}</s>
							</small>
						</h4>

						<h5 className='mt-4'>Description</h5>
						<p>{product.description}</p>
						{cartItems
							.filter((itx) => itx.id === product._id)
							.map((item) => (
								<div className='d-flex justify-content-between align-items-center'>
									<div className='d-flex align-items-center gap-2'>
										<button
											className='btn btn-outline-dark btn-sm rounded-circle'
											onClick={() => dispatch(decrementQty(item.id))}>
											−
										</button>
										<span className='fw-bold'>{item.quantity}</span>
										<button
											className='btn btn-outline-dark btn-sm rounded-circle'
											onClick={() => dispatch(incrementQty(item.id))}>
											+
										</button>
									</div>
								</div>
							))}
						<ul>
							{/* If you want to display variants dynamically */}
							{/* {product.variants.map((v) => (
								<li key={v.variant_id}>
									{v.title} - ₹{v.price} ({v.inventory_quantity} available)
								</li>
							))} */}
						</ul>

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
					</Col>
				</Row>
			</div>
		</Screen>
	);
}

// Fetch product by ID from params

export async function getServerSideProps(context) {
	const { id } = context.query;

	try {
		const res = await axios.get(`${HOST}product/${id}/getProductById`);

		return {
			props: {
				product: res.data.response || null, // adjust based on your API response
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
