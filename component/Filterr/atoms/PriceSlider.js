import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const PriceSlider = ({ priceRange, setPriceRange }) => {
	return (
		<div style={{ minWidth: '200px' }}>
			<h6 className='small fw-bold mb-2'>Price</h6>

			{/* Min Price */}
			<Form.Range
				min={0}
				max={10000}
				value={priceRange.from}
				onChange={(e) =>
					setPriceRange({ ...priceRange, from: Number(e.target.value) })
				}
			/>
			<p className='mb-1 small'>From: ₹{priceRange.from}</p>

			{/* Max Price */}
			<Form.Range
				min={0}
				max={10000}
				value={priceRange.to}
				onChange={(e) =>
					setPriceRange({ ...priceRange, to: Number(e.target.value) })
				}
			/>
			<p className='mb-0 small'>To: ₹{priceRange.to}</p>
		</div>
	);
};

export default PriceSlider;
