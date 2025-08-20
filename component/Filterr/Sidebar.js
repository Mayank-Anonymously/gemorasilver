import React from 'react';
import { Accordion, Form, Button, ListGroup } from 'react-bootstrap';

const FiltersSidebar = ({
	categories,
	selectedCategories,
	setSelectedCategories,
	dietaryNeeds,
	selectedDietary,
	setSelectedDietary,
	priceRange,
	setPriceRange,
	topRated,
}) => {
	const handleCategoryChange = (cat) => {
		setSelectedCategories((prev) =>
			prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
		);
	};

	const handleDietaryChange = (item) => {
		setSelectedDietary((prev) =>
			prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
		);
	};

	return (
		<>
			{/* Categories */}

			{/* Price Filter */}
			<h6>Filter By Price</h6>
			<div className='d-flex'>
				<Form.Control
					type='number'
					placeholder='From'
					value={priceRange.from}
					onChange={(e) =>
						setPriceRange({ ...priceRange, from: e.target.value })
					}
				/>
				<Form.Control
					type='number'
					placeholder='To'
					className='ms-2'
					value={priceRange.to}
					onChange={(e) => setPriceRange({ ...priceRange, to: e.target.value })}
				/>
			</div>
			<Button
				variant='primary'
				size='sm'
				className='mt-2 w-100'>
				Filter
			</Button>

			<hr />
		</>
	);
};

export default FiltersSidebar;
