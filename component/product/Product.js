// component/product/Product.js
import React, { useState, useEffect, useRef } from 'react';
import Panzoom from '@panzoom/panzoom';
import { Img } from 'react-image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { HOST } from '../apibaseurl';

const ProductImagesGallery = ({ images = [] }) => {
	const [mainImage, setMainImage] = useState(images[0]);
	const [zoomVisible, setZoomVisible] = useState(false);
	const [backgroundPosition, setBackgroundPosition] = useState('center');
	const [isMobile, setIsMobile] = useState(false);

	const imageRef = useRef(null);
	const panzoomInstance = useRef(null);

	/* ---------- Detect Mobile ---------- */
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 568);
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	/* ---------- Panzoom for Mobile ---------- */
	useEffect(() => {
		if (!isMobile || !imageRef.current) return;

		if (panzoomInstance.current) {
			panzoomInstance.current.destroy();
		}

		const panzoom = Panzoom(imageRef.current, {
			maxScale: 4,
			minScale: 1,
			step: 0.3,
			pinchSpeed: 1.5,
			contain: 'outside',
		});

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
	}, [isMobile, mainImage]);

	/* ---------- Hover Zoom Position ---------- */
	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			e.currentTarget.getBoundingClientRect();
		const x = ((e.pageX - left) / width) * 100;
		const y = ((e.pageY - top) / height) * 100;
		setBackgroundPosition(`${x}% ${y}%`);
	};

	/* ---------- Skeleton Loader ---------- */
	const ImageLoader = ({ width = '100%', height = 380 }) => (
		<Skeleton
			width={width}
			height={height}
			borderRadius={12}
		/>
	);

	return (
		<div className='gallery-container flex flex-col md:flex-row gap-4 items-center justify-center'>
			<div className='gallery-left relative'>
				{/* ================= MAIN IMAGE ================= */}
				{isMobile ? (
					/* -------- Mobile: Panzoom -------- */
					<div
						data-allow-zoom='true'
						className='main-image w-full flex justify-center overflow-hidden'
						style={{ touchAction: 'none' }}>
						<Img
							ref={imageRef}
							src={`${HOST}resources/${mainImage}`}
							alt='Product'
							className='gallery-img rounded-lg'
							loader={<ImageLoader height={380} />}
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
					/* -------- Desktop: Hover Zoom -------- */
					<div
						className='main-image relative overflow-hidden'
						onMouseEnter={() => setZoomVisible(true)}
						onMouseLeave={() => setZoomVisible(false)}
						onMouseMove={handleMouseMove}>
						<Img
							src={`${HOST}resources/${mainImage}`}
							alt='Product'
							className='gallery-img rounded-lg'
							loader={<ImageLoader height={500} />}
							style={{
								width: 500,
								height: 500,
								objectFit: 'cover',
							}}
						/>
					</div>
				)}

				{/* ================= THUMBNAILS ================= */}
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
							<Img
								src={`${HOST}resources/${img}`}
								alt={`thumb-${index}`}
								width={70}
								height={70}
								className='rounded-md object-cover'
								loader={
									<Skeleton
										width={70}
										height={70}
									/>
								}
							/>
						</div>
					))}
				</div>

				{/* ================= ZOOM BOX ================= */}
				{zoomVisible && !isMobile && (
					<div
						className='zoom-box absolute shadow-lg rounded-lg bg-no-repeat bg-cover'
						style={{
							backgroundImage: `url(${HOST}resources/${mainImage})`,
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
