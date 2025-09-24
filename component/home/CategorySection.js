'use client';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
	{
		name: 'Bracelets',
		count: 35,
		description: 'Explore our handcrafted bracelets made with love.',
		images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
	},
	{
		name: 'Engagement Rings',
		count: 82,
		description:
			"Explore Luniva Jewellery's Beautiful Engagement Ring Collections, Handcrafted In Ireland Using Certified Sustainable Diamonds And Gold.",
		images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
	},
	{
		name: 'Wedding Rings',
		count: 67,
		description: 'Beautiful wedding rings for your special day.',
		images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
	},
];

export default function Categories() {
	const [active, setActive] = useState('Engagement Rings');

	return (
		<div className='container py-5 category-section'>
			<p className='text-center text-muted text-uppercase mb-5'>Categories</p>
			<div
				style={{
					maxHeight: '400px',
					overflowY: 'auto',
				}}>
				{categories.map((cat, idx) => {
					const isActive = active === cat.name;

					return (
						<div
							key={cat.name}
							className='mb-5'>
							{/* Title */}
							<h3
								className={`category-title text-center${
									isActive ? 'active text-center cursive-fot' : ''
								}`}
								onClick={() => setActive(cat.name)}>
								{cat.name}{' '}
								<span className='cursive-fot-count small'>{cat.count}</span>
							</h3>

							{/* Expandable Section */}
							<Collapse in={isActive}>
								<div className='mt-3 text-center'>
									<p className='text-muted'>{cat.description}</p>
									<button className='btn btn-dark rounded-pill px-4'>
										See Product
									</button>

									{/* Images */}
									<div className='row mt-4 g-3'>
										<div
											className={`col-6 col-md-4 ${
												idx % 2 === 0 ? 'order-md-1' : 'order-md-2'
											}`}>
											<img
												src={cat.images[0]}
												alt={cat.name}
												className='img-fluid rounded shadow-sm category-img'
											/>
										</div>
										<div
											className={`col-6 col-md-4 ${
												idx % 2 === 0 ? 'order-md-2' : 'order-md-1'
											}`}>
											<img
												src={cat.images[1]}
												alt={cat.name}
												className='img-fluid rounded shadow-sm category-img'
											/>
										</div>
									</div>
								</div>
							</Collapse>
						</div>
					);
				})}
			</div>
		</div>
	);
}
