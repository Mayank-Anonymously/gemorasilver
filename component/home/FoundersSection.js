'use client';
import Slider from 'react-slick';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
	{
		text: `"We started Luniva Jewels because we wanted everyday jewelry that felt meaningful — simple, light, and made with real 925 silver. The name comes from Luna and Shiva, blending beauty with tradition. For us, it’s all about creating affordable pieces that feel personal and true. Now you know where to shop next."`,
		// text: `Delighted with my <em>Chupi engagement ring</em> so went back today to select my wedding ring. Nancy was <em>lovely to deal with</em>, <em>very friendly and patient</em> while I tried on lots of different styles before picking my <em>dream ring</em>.`,
		name: 'By founders',
		role: 'Customers',
		images: ['/user1.jpg', '/user2.jpg', '/user3.jpg'], // replace with actual image paths
	},
];

function PrevArrow(props) {
	const { onClick } = props;
	return (
		<div
			className='founder-arrow founder-left'
			onClick={onClick}>
			<FaArrowLeft />
		</div>
	);
}

function NextArrow(props) {
	const { onClick } = props;
	return (
		<div
			className='founder-arrow founder-right'
			onClick={onClick}>
			<FaArrowRight />
		</div>
	);
}

export default function TestimonialCarousel() {
	const settings = {
		dots: false,
		infinite: false,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<section className='founder-wrapper'>
			<Container>
				<Row className='justify-content-center'>
					<Col
						md={12}
						className='text-center'>
						{testimonials.map((t, i) => (
							<div
								key={i}
								className='founder-card'>
								{/* <div className='founder-stars'>★★★★★</div> */}
								<p
									className='founder-text'
									dangerouslySetInnerHTML={{ __html: t.text }}></p>

								<div className='founder-userSection'>
									<div className='founder-avatars'>
										{t.images.map((img, idx) => (
											<div
												key={idx}
												className='founder-avatar'></div>
										))}
									</div>
									<div className='founder-userInfo'>
										<h5 style={{ fontStyle: 'italic' }}>{t.name}</h5>
									</div>
								</div>

								{/* <button className='btn btn-dark rounded-pill px-4 py-1'>
										See More
									</button> */}
							</div>
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
}
