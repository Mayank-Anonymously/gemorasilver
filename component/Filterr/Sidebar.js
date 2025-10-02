'use client';

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PriceSlider from './atoms/PriceSlider';

const FiltersResponsive = ({
	categories,
	selectedCategories,
	setSelectedCategories,
	priceRange,
	setPriceRange,
	setActiveCategory,
}) => {
	// Local states for all other filters
	const [selectedStoneColors, setSelectedStoneColors] = useState([]);
	const [selectedStyles, setSelectedStyles] = useState([]);
	const [selectedShopFor, setSelectedShopFor] = useState([]);
	const [selectedMetals, setSelectedMetals] = useState([]);
	const [selectedStones, setSelectedStones] = useState([]);

	// Reusable Checkbox Group
	const CheckboxGroup = ({ title, items, selected, onChange }) => (
		<div
			className='mb-3'
			style={{ minWidth: '160px' }}>
			<h6 className='small fw-bold mb-2'>{title}</h6>
			{items.map((item, i) => (
				<Form.Check
					key={i}
					type='checkbox'
					label={item}
					checked={selected?.includes(item)}
					onChange={() => onChange(item)}
					className='mb-1'
				/>
			))}
		</div>
	);

	// Toggle helper
	const toggleItem = (item, selected, setSelected) => {
		setSelected((prev) =>
			prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
		);
	};

	// Product type (coming from props)
	const handleCategoryChange = (cat) => {
		setActiveCategory(cat);
	};

	return (
		<>
			{/* Desktop Sidebar View */}
			<div
				className='d-none d-lg-block p-3 border rounded'
				style={{ minWidth: '220px' }}>
				<h6 className='mb-3'>Filters</h6>
				<div style={{ minWidth: '160px' }}>
					<PriceSlider
						priceRange={priceRange}
						setPriceRange={setPriceRange}
					/>
				</div>
				<CheckboxGroup
					title='Product type'
					items={categories}
					selected={selectedCategories}
					onChange={handleCategoryChange}
				/>
				<CheckboxGroup
					title='Color'
					items={['Red', 'Blue', 'Green', 'White', 'Pink', 'Purple']}
					selected={selectedStoneColors}
					onChange={(val) =>
						toggleItem(val, selectedStoneColors, setSelectedStoneColors)
					}
				/>

				<CheckboxGroup
					title='Style'
					items={[
						'Classic',
						'⁠cocktail',
						'Traditional',
						'⁠Party wear',
						'⁠Office wear',
					]}
					selected={selectedStyles}
					onChange={(val) => toggleItem(val, selectedStyles, setSelectedStyles)}
				/>
			</div>

			{/* Mobile / Tablet Horizontal View */}
			<div
				className='d-lg-none flex-nowrap overflow-auto border-bottom py-3'
				style={{
					gap: '20px',
					padding: '0 10px',
					scrollBehavior: 'smooth',
				}}>
				<div style={{ minWidth: '160px' }}>
					<PriceSlider
						priceRange={priceRange}
						setPriceRange={setPriceRange}
					/>
				</div>

				<CheckboxGroup
					title='Product type'
					items={categories}
					selected={selectedCategories}
					onChange={handleCategoryChange}
				/>

				<CheckboxGroup
					title='Stone Color'
					items={['Red', 'Blue', 'Green', 'White', 'Pink', 'Purple']}
					selected={selectedStoneColors}
					onChange={(val) =>
						toggleItem(val, selectedStoneColors, setSelectedStoneColors)
					}
				/>

				<CheckboxGroup
					title='Style'
					items={[
						'Classic',
						'⁠cocktail',
						'Traditional',
						'⁠Party wear',
						'⁠Office wear',
					]}
					selected={selectedStyles}
					onChange={(val) => toggleItem(val, selectedStyles, setSelectedStyles)}
				/>
			</div>
		</>
	);
};

export default FiltersResponsive;
