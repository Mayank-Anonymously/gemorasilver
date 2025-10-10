// component/product/Product.js
import React, { useState, useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductImagesGallery = ({ images = [] }) => {
	const [mainImage, setMainImage] = useState(images[0]);
	const [zoomVisible, setZoomVisible] = useState(false);
	const [backgroundPosition, setBackgroundPosition] = useState('center');
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Detect screen size
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 568);
		};

		handleResize(); // Run on mount
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			e.currentTarget.getBoundingClientRect();
		const x = ((e.pageX - left) / width) * 100;
		const y = ((e.pageY - top) / height) * 100;
		setBackgroundPosition(`${x}% ${y}%`);
	};

	console.log('isMobile:', isMobile === true ? 'Yes' : 'No');

	return (
		<div className='gallery-container'>
			<div className='gallery-left'>
				{/* Desktop version with zoom */}
				{isMobile === true ? (
					<div className='main-image'>
						<Zoom>
							<img
								src={mainImage}
								alt='Product'
								width={400}
								height={400}
								className='gallery-img'
								style={{
									borderRadius: '10px',
									cursor: 'zoom-in',
									touchAction: 'auto',
								}}
							/>
						</Zoom>
					</div>
				) : (
					<div
						className='main-image'
						onMouseEnter={() => setZoomVisible(true)}
						onMouseLeave={() => setZoomVisible(false)}
						onMouseMove={handleMouseMove}>
						<img
							src={mainImage}
							alt='Product'
							width={600}
							height={600}
							className='gallery-img'
						/>
					</div>
				)}
				{isMobile === false && zoomVisible && (
					<div
						className='zoom-box'
						style={{
							backgroundImage: `url(${mainImage})`,
							backgroundPosition,
						}}
					/>
				)}
				{/* Thumbnails */}
				<div className='thumbnail-row'>
					{images.map((img, index) => (
						<div
							key={index}
							className={`thumbnail ${mainImage === img ? 'active' : ''}`}
							onClick={() => setMainImage(img)}>
							<img
								src={img}
								alt='thumb'
								width={80}
								height={80}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductImagesGallery;
