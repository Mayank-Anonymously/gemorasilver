// pages/product/[slug].js
import FooterInfo from '@/component/common/FooterInfo';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import TrendingProductSection from '@/component/home/TrendingProduct';
import ProductImagesGallery from '@/component/product/Product';
import { addToCart } from '@/component/redux/slices/cartSlice';
import Head from 'next/head';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const sampleProduct = {
	id: 1,
	name: 'SuperCool Headphones',
	price: 1999,
};

const reviews = [
	{
		name: 'John Doe',
		rating: 4,
		comment: 'Sound quality is great. Comfortable on ears. Battery lasts long!',
	},
	{
		name: 'Jane Smith',
		rating: 3,
		comment: 'Nice product but the build could be better.',
	},
];

const renderStars = (rating) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(
				<FaStar
					key={i}
					style={{ color: '#FFD700', marginRight: '2px' }}
				/>
			);
		} else {
			stars.push(
				<FaRegStar
					key={i}
					style={{ color: '#FFD700', marginRight: '2px' }}
				/>
			);
		}
	}
	return stars;
};

export default function ProductPage() {
	const dispatch = useDispatch();
	const [showCounter, setShowCounter] = useState(false);
	const handleAddtoCart = () => {
		setShowCounter(true);

		dispatch(addToCart(sampleProduct));
	};
	const handleRemoveFromCart = () => {
		setShowCounter(false);
	};

	return (
		<Screen>
			<div className='container mt-5'>
				<div>
					<a
						href='/'
						className='text-decoration-none'>
						<span>Home / </span>
					</a>

					<span>Product / </span>
					<span>SuperCool Bluetooth Headphones</span>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<ProductImagesGallery />
					</div>

					<div className='col-md-6'>
						<h2 className='mb-3'>SuperCool Bluetooth Headphones</h2>
						<p className='text-muted'>Model: SC-BT100</p>
						<h4 className='text-primary mb-3'>$89.99</h4>

						<div className='mb-3 details-button'>
							{/* {showCounter ? (
								<Counter handleRemoveFromCart={handleRemoveFromCart} />
							) : ( */}
							<button
								className='btn btn-dark me-2'
								onClick={() => handleAddtoCart()}>
								Add to Cart
							</button>
							{/* )} */}

							<button className='btn btn-outline-primary'>Buy Now</button>
						</div>

						<h5 className='mt-4'>Description</h5>
						<p>
							Enjoy high-quality sound with SuperCool BT Headphones. Designed
							for comfort, battery life up to 24 hours, and seamless Bluetooth
							5.0 connectivity.
						</p>

						<h5 className='mb-3'>Specifications</h5>
						<ul>
							<li>Bluetooth 5.0</li>
							<li>Battery Life: 24 hours</li>
							<li>Charging Time: 2 hours</li>
							<li>Weight: 250g</li>
							<li>Range: 10 meters</li>
						</ul>
					</div>
				</div>

				{/* Bottom: Reviews + Specs + FAQ */}
				<Row className='mt-5'>
					{/* Left: Reviews */}
					<Col md={6}>
						<h5 className='mb-3'>Customer Reviews</h5>
						{reviews.map((review, idx) => (
							<Card
								key={idx}
								className='mb-2 p-3 border-0 shadow-sm'>
								<strong>{review.name}</strong>
								<div className='mb-1'>{renderStars(review.rating)}</div>
								<p className='mb-0'>{review.comment}</p>
							</Card>
						))}
					</Col>

					{/* Right: FAQ */}
					<Col md={6}>
						<h5 className='mt-4 mb-3'>Frequently Asked Questions</h5>
						<Accordion
							defaultActiveKey='0'
							flush>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>
									Is this product compatible with iPhones?
								</Accordion.Header>
								<Accordion.Body>
									Yes, it's fully compatible with iPhones and any Bluetooth
									5.0-enabled device.
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='1'>
								<Accordion.Header>
									Does it have noise cancellation?
								</Accordion.Header>
								<Accordion.Body>
									Yes, it supports passive noise cancellation through ear-cup
									design.
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='2'>
								<Accordion.Header>What is the return policy?</Accordion.Header>
								<Accordion.Body>
									You can return it within 30 days of purchase if unused and in
									original packaging.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
				<section>
					<TrendingProductSection />
				</section>
				<section>
					<FooterInfo />
				</section>
			</div>
		</Screen>
	);
}
