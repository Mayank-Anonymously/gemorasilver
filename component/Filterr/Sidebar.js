import React from 'react';
import { Form } from 'react-bootstrap';
import PriceSlider from './atoms/PriceSlider';

const FiltersResponsive = ({
	categories,
	selectedCategories,
	setSelectedCategories,
	priceRange,
	setPriceRange,
}) => {
	const handleCategoryChange = (cat) => {
		setSelectedCategories((prev) =>
			prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
		);
	};

	// Reusable Checkbox Group
	const CheckboxGroup = ({ title, items, selected, onChange }) => (
		<div className='mb-3'>
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

	return (
		<>
		{/* Desktop Sidebar View */}
			<div
				className='d-none d-lg-block p-3 border rounded'
				style={{ minWidth: '220px' }}>
				<h6 className='mb-3'>Filters</h6>

				<CheckboxGroup
					title='Product type'
					items={categories}
					selected={selectedCategories}
					onChange={handleCategoryChange}
				/>

				{/* Price */}
				<div className='mb-3'>
					<h6 className='small fw-bold'>Price</h6>
					<Form.Control
						type='number'
						placeholder='From'
						value={priceRange.from}
						onChange={(e) =>
							setPriceRange({ ...priceRange, from: e.target.value })
						}
						className='mb-2'
					/>
					<Form.Control
						type='number'
						placeholder='To'
						value={priceRange.to}
						onChange={(e) =>
							setPriceRange({ ...priceRange, to: e.target.value })
						}
					/>
				</div>

				<CheckboxGroup
					title='Shop For'
					items={['Men', 'Women', 'Kids']}
					selected={[]}
					onChange={() => {}}
				/>
				<CheckboxGroup
					title='Color'
					items={['Red', 'Blue', 'Green']}
					selected={[]}
					onChange={() => {}}
				/>
				<CheckboxGroup
					title='Metal'
					items={['Gold', 'Silver', 'Platinum']}
					selected={[]}
					onChange={() => {}}
				/>
				<CheckboxGroup
					title='Stone'
					items={['Diamond', 'Ruby', 'Sapphire']}
					selected={[]}
					onChange={() => {}}
				/>
				<CheckboxGroup
					title='Style'
					items={['Classic', 'Modern', 'Traditional']}
					selected={[]}
					onChange={() => {}}
				/>
				<CheckboxGroup
					title='Sub Category'
					items={['Rings', 'Earrings', 'Bracelets']}
					selected={[]}
					onChange={() => {}}
				/>
			</div>

			{/* Mobile / Tablet Horizontal View */}
			<div
				className='d-lg-none flex-nowrap overflow-auto border-bottom py-2'
				style={{
					gap: '20px',
					minHeight: '120px',
					padding: '0 10px',
					scrollBehavior: 'smooth', // optional smooth scrolling
				}}>
				<CheckboxGroup
					title='Product type'
					items={categories}
					selected={selectedCategories}
					onChange={handleCategoryChange}
				/>

				<PriceSlider
					priceRange={priceRange}
					setPriceRange={setPriceRange}
				/>
				<CheckboxGroup
					title='Metal'
					items={['Gold', 'Silver', 'Platinum']}
					selected={[]}
					onChange={() => {}}
				/>
				<CheckboxGroup
					title='Stone'
					items={['Diamond', 'Ruby', 'Sapphire']}
					selected={[]}
					onChange={() => {}}
				/>
				<CheckboxGroup
					title='Style'
					items={['Classic', 'Modern', 'Traditional']}
					selected={[]}
					onChange={() => {}}
				/>
				<CheckboxGroup
					title='Sub Category'
					items={['Rings', 'Earrings', 'Bracelets']}
					selected={[]}
					onChange={() => {}}
				/>
			</div>
		</>
	);
};

export default FiltersResponsive;
