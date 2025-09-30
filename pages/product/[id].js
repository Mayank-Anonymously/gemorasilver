import ProductImagesGallery from '@/component/product/Product';
import { Row, Col } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import Head from 'next/head';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { products } from '@/component/data/products';
import { addToCart, buyNow } from '@/component/redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function ProductPage({ product }) {
	const dispatch = useDispatch();
	const router = useRouter();
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
					<span>{product.category} / </span>
					<span>{product.title}</span>
				</div>

				<Row className='mt-4'>
					<Col md={6}>
						<ProductImagesGallery images={product.images} />
					</Col>

					<Col md={6}>
						<h2 className='mb-3'>{product.title}</h2>
						<p className='text-muted'>Brand: {product.brand}</p>
						<h4 className='text-primary mb-3'>
							₹{product.price}{' '}
							<small className='text-muted'>
								<s>₹{product.compare_at_price}</s>
							</small>
						</h4>

						<h5 className='mt-4'>Description</h5>
						<p>{product.description}</p>

						{/* ✅ Specifications Section */}
						<h5 className='mt-4'>Specifications</h5>
						<ul>
							<li>Material: {product.material || 'Cotton Blend'}</li>
							<li>Color: {product.color || 'Black'}</li>
							<li>Fit: {product.fit || 'Regular Fit'}</li>
							<li>Care: {product.care || 'Machine Wash'}</li>
							<li>Country of Origin: {product.origin || 'India'}</li>
						</ul>

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
								onClick={() => dispatch(addToCart(product))}>
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

	// Example: find product by ID (slug)
	const product = products.find((p) => p.id === id) || null;
	return {
		props: { product },
	};
}
