// components/Testimonials.js
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
	{
		name: 'Sanya Arora',
		title: 'Verified Buyer',
		image: '/images/testimonials/user1.jpg',
		quote:
			'Gorgeous jewellery, amazing quality. Saatvik Silver makes any day special. Highly recommend it!',
		rating: 5,
	},
	{
		name: 'Vanshika Sharma',
		title: 'Happy Customer',
		image: '/images/testimonials/user2.jpg',
		quote:
			'Beautiful jewellery, excellent quality. Saatvik Silver adds charm to any event. Highly recommended for everyone!',
		rating: 5,
	},
	{
		name: 'Erum Hayat',
		title: 'Fashion Enthusiast',
		image: '/images/testimonials/user3.jpg',
		quote:
			'Amazing designs, top–notch quality. Saatvik Silver makes every moment shine. Highly recommended!',
		rating: 5,
	},
];

export default function Testimonials() {
	const settings = {
		centerMode: true,
		centerPadding: '0px',
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		lazyLoad: 'ondemand',
		arrows: false,
		accessibility: true,
		responsive: [
			{
				breakpoint: 992, // tablet
				settings: { slidesToShow: 1 },
			},
			{
				breakpoint: 1200, // small desktop
				settings: { slidesToShow: 2 },
			},
		],
	};

	return (
		<section className='py-5 bg-white'>
			<div className='container-fluid'>
				<h2 className='text-center mb-5 fw-bold text-uppercase'>
					Testimonials
				</h2>
				<Slider {...settings}>
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className='testimonial-slide px-3'>
							<div className='card border-0 text-center'>
								<div className='card-body p-4'>
									{/* Star Rating */}
									<div className='mb-3'>
										{Array.from({ length: t.rating }).map((_, i) => (
											<span
												key={i}
												style={{ color: '#000', fontSize: '18px' }}>
												★
											</span>
										))}
									</div>

									{/* Quote */}
									<p className='fst-italic text-muted mb-4'>"{t.quote}"</p>

									{/* User Image */}
									<img
										src={t.image}
										alt={t.name}
										className='rounded-circle mb-3'
										style={{
											width: '60px',
											height: '60px',
											objectFit: 'cover',
										}}
									/>

									{/* Name + Title */}
									<h6 className='fw-bold mb-0'>{t.name}</h6>
									<p className='text-secondary small'>{t.title}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
