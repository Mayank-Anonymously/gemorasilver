import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BreadHomeBanner = () => {
	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		// appendDots: (dots) => (
		// 	<div
		// 		style={{
		// 			borderRadius: '10px',
		// 			padding: '10px',
		// 			bottom: '10px',
		// 		}}>
		// 		<ul
		// 			style={{ margin: '0px', display: 'flex', justifyContent: 'center' }}>
		// 			{' '}
		// 			{dots}{' '}
		// 		</ul>s
		// 	</div>
		// ),
		// customPaging: (i) => (
		// 	<div
		// 		style={{
		// 			width: '12px',
		// 			height: '12px',
		// 			background: '#ccc',
		// 			border: '2px solid #888',
		// 			margin: '0 5px',
		// 			transition: 'all 0.3s ease',
		// 		}}></div>
		// ),
	};

	return (
		<div className='banner-section'>
			<Slider {...settings}>
				<div
					className='d-flex justify-content-center align-items-center'
					style={{ height: '400px' }}>
					<img
						src='../../assets/banner/banner-one.png'
						alt='slide 1'
						className='carousel-img'
					/>
				</div>

				<div
					className='d-flex justify-content-center align-items-center'
					style={{ height: '400px' }}>
					<img
						src='../../assets/banner/banner-two.png'
						alt='slide 2'
						className='carousel-img'
					/>
				</div>
				<div
					className='d-flex justify-content-center align-items-center'
					style={{ height: '400px' }}>
					<img
						src='../../assets/banner/banner-three.png'
						alt='slide 3'
						className='carousel-img'
					/>
				</div>
			</Slider>
		</div>
	);
};

export default BreadHomeBanner;
