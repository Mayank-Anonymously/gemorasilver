// components/ProductImagesGallery.js
import { useState } from 'react';

export default function ProductImagesGallery({ images }) {
	const [selectedImage, setSelectedImage] = useState(images[0]);

	return (
		<div>
			<img
				src={selectedImage}
				alt='Main Product'
				className='img-fluid mb-3 rounded border'
			/>

			<div className='d-flex gap-2'>
				{images.map((img, idx) => (
					<img
						key={idx}
						src={img}
						alt={`View ${idx + 1}`}
						className='img-thumbnail'
						style={{ width: '80px', cursor: 'pointer' }}
						onClick={() => setSelectedImage(img)}
					/>
				))}
			</div>
		</div>
	);
}
