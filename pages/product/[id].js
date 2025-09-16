import ProductImagesGallery from '@/component/product/Product';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import TrendingProductSection from '@/component/home/TrendingProduct';
import Head from 'next/head';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { products } from '@/component/data/products';

const renderStars = (rating) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		stars.push(
			i <= rating ? (
				<FaStar
					key={i}
					style={{ color: '#FFD700', marginRight: '2px' }}
				/>
			) : (
				<FaRegStar
					key={i}
					style={{ color: '#FFD700', marginRight: '2px' }}
				/>
			)
		);
	}
	return stars;
};

export default function ProductPage({ product }) {
	console.log(product);
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

						<h5 className='mb-3'>Variants</h5>
						<ul>
							{product.variants.map((v) => (
								<li key={v.variant_id}>
									{v.title} - ${v.price} ({v.inventory_quantity} available)
								</li>
							))}
						</ul>
					</Col>
				</Row>

				{/* <section className='mt-5'>
					<TrendingProductSection />
				</section> */}
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
