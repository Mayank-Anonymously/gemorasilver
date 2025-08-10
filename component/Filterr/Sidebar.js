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
			<Accordion
				defaultActiveKey='0'
				className='mb-3'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Categories</Accordion.Header>
					<Accordion.Body>
						{categories.map((cat) => (
							<Form.Check
								key={cat}
								type='checkbox'
								label={cat}
								checked={selectedCategories.includes(cat)}
								onChange={() => handleCategoryChange(cat)}
							/>
						))}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			{/* Dietary Needs */}
			<h6>Dietary Needs</h6>
			{dietaryNeeds.map((item) => (
				<Form.Check
					key={item}
					type='checkbox'
					label={item}
					checked={selectedDietary.includes(item)}
					onChange={() => handleDietaryChange(item)}
				/>
			))}

			<hr />

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

			{/* Top Rated Products */}
			<h6>Top Rated Products</h6>
			<ListGroup variant='flush'>
				{topRated.map((p) => (
					<ListGroup.Item key={p.id}>
						<div className='d-flex align-items-center'>
							<img
								src={p.img}
								width='40'
								height='40'
								className='me-2'
							/>
							<div>
								<div style={{ fontSize: '0.85rem' }}>{p.name}</div>
								<strong className='text-danger'>${p.price}</strong>
							</div>
						</div>
					</ListGroup.Item>
				))}
			</ListGroup>
		</>
	);
};

export default FiltersSidebar;
