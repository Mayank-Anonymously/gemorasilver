// components/ProductImagesGallery.js
import { useState } from 'react';
import { HOST } from '../apibaseurl';

export default function ProductImagesGallery({ images }) {
	const [selectedImage, setSelectedImage] = useState(images);

	return (
		<div>
			<img
				src={`${HOST}resources/${selectedImage}`}
				alt='Main Product'
				className='img-fluid mb-3 rounded border'
			/>

			<div className='d-flex gap-2'>
				{/* {images.map((img, idx) => ( */}
				<img
					// key={idx}
					src={`${HOST}resources/${images}`}
					// alt={`View ${idx + 1}`}
					className='img-thumbnail'
					style={{ width: '80px', cursor: 'pointer' }}
					onClick={() => setSelectedImage(img)}
				/>
				{/* ))} */}
			</div>
		</div>
	);
}
