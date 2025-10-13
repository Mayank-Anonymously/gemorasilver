'use client';

import React from 'react';
import { Form } from 'react-bootstrap';
import PriceSlider from './atoms/PriceSlider';

const FiltersResponsive = ({
	categories,
	selectedCategories,
	setSelectedCategories,
	priceRange,
	setPriceRange,
	activeCategory,
	setActiveCategory,
	selectedStoneColors,
	setSelectedStoneColors,
	selectedStyles,
	handleApplyFilter,
	setSelectedStyles,
	handleResetFilter,
	onClickSort,
}) => {
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

	// Handle product type selection
	const handleCategoryChange = (cat) => {
		setActiveCategory(cat);
		if (cat === 'All') {
			setSelectedCategories([]);
		} else {
			setSelectedCategories([cat]);
		}
	};

	return (
		<>
			{/* Desktop Sidebar View */}
			<div className='d-flex gap-3 mt-3'>
				<button
					className='btn apple-btn'
					onClick={handleApplyFilter}>
					Apply
				</button>

				<button
					className='btn reset-btn'
					conClick={handleResetFilter}>
					Reset
				</button>
			</div>
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
					title='Style'
					items={[
						'Cocktail designs',
						'Party collection',
						'Working professionals',
					]}
					selected={selectedStyles}
					onChange={(val) => toggleItem(val, selectedStyles, setSelectedStyles)}
				/>
			</div>

			{/* Mobile / Tablet Horizontal View */}
			<div
				className='d-lg-none flex-nowrap overflow-auto border-bottom py-3'
				style={{ gap: '20px', padding: '0 10px', scrollBehavior: 'smooth' }}>
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
					title='Style'
					items={[
						'Cocktail designs',
						'Party collection',
						'Working professionals',
					]}
					selected={selectedStyles}
					onChange={(val) => toggleItem(val, selectedStyles, setSelectedStyles)}
				/>
			</div>
		</>
	);
};

export default FiltersResponsive;
