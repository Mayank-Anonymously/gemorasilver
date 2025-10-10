// component/product/Product.js
import React, { useState } from 'react';
import Image from 'next/image';

const ProductImagesGallery = ({ images = [], useIsMobile }) => {
	const [mainImage, setMainImage] = useState(images[0]);
	const [zoomVisible, setZoomVisible] = useState(false);
	const [backgroundPosition, setBackgroundPosition] = useState('center');

	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			e.currentTarget.getBoundingClientRect();
		const x = ((e.pageX - left) / width) * 100;
		const y = ((e.pageY - top) / height) * 100;
		setBackgroundPosition(`${x}% ${y}%`);
	};

	return (
		<div className='gallery-container'>
			<div className='gallery-left'>
				{useIsMobile ? (
					<div className='main-image'>
						<img
							src={mainImage}
							alt='Product'
							width={600}
							height={600}
							className='gallery-img'
						/>
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
			{zoomVisible && (
				<div
					className='zoom-box'
					style={{
						backgroundImage: `url(${mainImage})`,
						backgroundPosition,
					}}></div>
			)}
		</div>
	);
};

export default ProductImagesGallery;
