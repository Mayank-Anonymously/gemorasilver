// components/Testimonials.js
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
	{
		name: 'Ariana Gomez',
		title: 'Verified Buyer',
		image: '/images/testimonials/user1.jpg',
		quote:
			'These headphones changed how I listen to music. Crystal-clear sound!',
	},
	{
		name: 'Leo K.',
		title: 'Tech Reviewer',
		image: '/images/testimonials/user2.jpg',
		quote:
			'Super impressed with the build quality. Easily competes with top brands.',
	},
	{
		name: 'Samantha Ray',
		title: 'Happy Customer',
		image: '/images/testimonials/user3.jpg',
		quote:
			'Battery life is INSANE. I can go days without charging. Totally worth it!',
	},
];

export default function Testimonials() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		lazyLoad: 'ondemand',
		arrows: true,
		accessibility: true,
	};

	return (
		<section className='py-5 bg-light position-relative'>
			<div className='container'>
				<h2 className='text-center mb-5 fw-bold'>What Our Customers Say</h2>
				<Slider {...settings}>
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className='m-5'>
							<div
								className='card mx-auto shadow-lg border-0'
								style={{ maxWidth: '600px' }}>
								<div className='card-body text-center p-4'>
									<img
										src={t.image}
										alt={t.name}
										className='rounded-circle mb-4'
										style={{
											width: '80px',
											height: '80px',
											objectFit: 'cover',
										}}
									/>
									<p className='fs-5 fst-italic text-muted'>“{t.quote}”</p>
									<h5 className='mt-3 fw-bold'>{t.name}</h5>
									<p className='text-secondary mb-0'>{t.title}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
