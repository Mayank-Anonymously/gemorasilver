// component/product/Product.js
import React, { useState, useEffect, useRef } from 'react';
import Panzoom from '@panzoom/panzoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductImagesGallery = ({ images = [] }) => {
	const [mainImage, setMainImage] = useState(images[0]);
	const [zoomVisible, setZoomVisible] = useState(false);
	const [backgroundPosition, setBackgroundPosition] = useState('center');
	const [isMobile, setIsMobile] = useState(false);
	const imageRef = useRef(null);
	const panzoomInstance = useRef(null);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 568);
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (isMobile && imageRef.current) {
			// Destroy existing Panzoom instance (if any)
			if (panzoomInstance.current) {
				panzoomInstance.current.destroy();
			}

			// Initialize Panzoom
			const panzoom = Panzoom(imageRef.current, {
				maxScale: 4,
				minScale: 1,
				step: 0.3,
				pinchSpeed: 1.5,
				contain: 'outside',
			});

			// Enable pinch zooming
			imageRef.current.parentElement.addEventListener(
				'wheel',
				panzoom.zoomWithWheel
			);
			panzoomInstance.current = panzoom;

			return () => {
				imageRef.current?.parentElement.removeEventListener(
					'wheel',
					panzoom.zoomWithWheel
				);
				panzoom.destroy();
			};
		}
	}, [isMobile, mainImage]);

	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			e.currentTarget.getBoundingClientRect();
		const x = ((e.pageX - left) / width) * 100;
		const y = ((e.pageY - top) / height) * 100;
		setBackgroundPosition(`${x}% ${y}%`);
	};

	return (
		<div className='gallery-container flex flex-col md:flex-row gap-4 items-center justify-center'>
			<div className='gallery-left relative'>
				{/* ✅ MOBILE: Panzoom */}
				{isMobile ? (
					<div
						data-allow-zoom='true'
						className='main-image w-full flex justify-center overflow-hidden'
						style={{ touchAction: 'none' }}>
						<img
							ref={imageRef}
							src={mainImage}
							alt='Product'
							className='gallery-img rounded-lg'
							style={{
								width: '100%',
								maxWidth: 380,
								userSelect: 'none',
								touchAction: 'none',
								cursor: 'grab',
							}}
						/>
					</div>
				) : (
					/* ✅ DESKTOP: Hover Zoom */
					<div
						className='main-image relative overflow-hidden'
						onMouseEnter={() => setZoomVisible(true)}
						onMouseLeave={() => setZoomVisible(false)}
						onMouseMove={handleMouseMove}
						style={{ position: 'relative' }}>
						<img
							src={mainImage}
							alt='Product'
							width={500}
							height={500}
							className='gallery-img rounded-lg'
							style={{ objectFit: 'cover' }}
						/>
					</div>
				)}

				{/* ✅ Thumbnails */}
				<div className='thumbnail-row flex gap-3 mt-4 justify-center flex-wrap'>
					{images.map((img, index) => (
						<div
							key={index}
							className={`thumbnail border-2 rounded-md p-1 cursor-pointer transition-all ${
								mainImage === img
									? 'border-[#800000] scale-105'
									: 'border-gray-300'
							}`}
							onClick={() => setMainImage(img)}>
							<img
								src={img}
								alt={`thumb-${index}`}
								width={70}
								height={70}
								className='rounded-md object-cover'
							/>
						</div>
					))}
				</div>
				{zoomVisible && (
					<div
						className='zoom-box absolute  shadow-lg rounded-lg bg-no-repeat bg-cover'
						style={{
							backgroundImage: `url(${mainImage})`,
							backgroundPosition,
							backgroundSize: '200%',
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default ProductImagesGallery;
