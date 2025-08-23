// pages/product/[slug].js
import FooterInfo from '@/component/common/FooterInfo';
import Screen from '@/component/common/Screen';
import Counter from '@/component/counter';
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
				<div className='row mt-5'>
					{/* Left: Reviews */}
					<div className='col-md-6'>
						<h5 className='mb-3'>Customer Reviews</h5>
						<div className='border rounded p-3 mb-2'>
							<strong>John Doe</strong> ★★★★☆
							<p>
								Sound quality is great. Comfortable on ears. Battery lasts long!
							</p>
						</div>
						<div className='border rounded p-3 mb-2'>
							<strong>Jane Smith</strong> ★★★☆☆
							<p>Nice product but the build could be better.</p>
						</div>
					</div>

					{/* Right: Specifications + FAQ */}
					<div className='col-md-6'>
						<h5 className='mt-4 mb-3'>Frequently Asked Questions</h5>
						<div
							className='accordion'
							id='faqAccordion'>
							<div className='accordion-item'>
								<h2
									className='accordion-header'
									id='faq1'>
									<button
										className='accordion-button'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapse1'
										aria-expanded='true'>
										Is this product compatible with iPhones?
									</button>
								</h2>
								<div
									id='collapse1'
									className='accordion-collapse collapse show'
									data-bs-parent='#faqAccordion'>
									<div className='accordion-body'>
										Yes, it's fully compatible with iPhones and any Bluetooth
										5.0-enabled device.
									</div>
								</div>
							</div>

							<div className='accordion-item'>
								<h2
									className='accordion-header'
									id='faq2'>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapse2'>
										Does it have noise cancellation?
									</button>
								</h2>
								<div
									id='collapse2'
									className='accordion-collapse collapse'
									data-bs-parent='#faqAccordion'>
									<div className='accordion-body'>
										Yes, it supports passive noise cancellation through ear-cup
										design.
									</div>
								</div>
							</div>

							<div className='accordion-item'>
								<h2
									className='accordion-header'
									id='faq3'>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapse3'>
										What is the return policy?
									</button>
								</h2>
								<div
									id='collapse3'
									className='accordion-collapse collapse'
									data-bs-parent='#faqAccordion'>
									<div className='accordion-body'>
										You can return it within 30 days of purchase if unused and
										in original packaging.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
