'use client';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
const categories = [
	{
		name: 'Bracelets',
		count: 28,
		description: 'Explore our handcrafted bracelets made with love.',
		images: ['/assets/category/bracelet.png', '/assets/product/bracelet.png'],
	},

	// New categories with default values
	{
		name: 'Rings',
		count: 48,
		description: 'Explore our beautiful rings collection.',
		images: ['/assets/category/rings.png', '/assets/category/rings.png'],
	},
	{
		name: 'Earrings',
		count: 18,
		description: 'Find earrings to match every style.',
		images: ['/assets/category/earrings.png', '/assets/category/earrings.png'],
	},
	{
		name: 'Pendants',
		count: 14,
		description: 'Elegant pendants for every occasion.',
		images: ['/assets/category/pendant.png', '/assets/category/pendant.png'],
	},

	{
		name: 'Jewellery Set',
		count: 13,
		description: 'Beautiful matching sets of pendants and earrings.',
		images: [
			'/assets/category/jewellery-set.png',
			'/assets/category/jewellery-set.png',
		],
	},
	{
		name: 'Necklace Set',
		count: 13,
		description: 'Beautiful matching sets of pendants and earrings.',
		images: ['/assets/category/set.png', '/assets/category/set.png'],
	},
	{
		name: 'Toe Rings',
		count: 13,
		description: 'Stylish toe rings for every occasion.',
		images: [
			'/assets/category/toe-rings.png',
			'/assets/category/toe-rings.png',
		],
	},
	{
		name: 'Anklets',
		count: 3,
		description: 'Stylish toe rings for every occasion.',
		images: ['/assets/category/anklet.png', '/assets/category/anklet.png'],
	},
];

function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const update = () => setIsMobile(window.innerWidth < breakpoint);
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, [breakpoint]);

	return isMobile;
}
export default function Categories() {
	const [active, setActive] = useState('Rings');
	const isMobile = useIsMobile();
	return (
		<div className='container py-5 category-section'>
			<p className='text-center text-muted text-uppercase mb-5'>Categories</p>
			<div>
				{categories.map((cat, idx) => {
					const isActive = active === cat.name;

					return (
						<div
							data-aos='zoom-in'
							key={cat.name}
							className='mb-5'
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex',
								flexDirection: 'column',
							}}>
							<div>
								<h3
									className={`category-title text-center${
										isActive
											? 'category-title active text-center cursive-fot'
											: ''
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
											<a
												href={`/category/${cat.name.toLocaleLowerCase()}`}
												className='text-decoration-none text-white'>
												See Product
											</a>
										</button>

										{/* Images */}
										<div className='row mt-4 g-3'>
											<div
												className={`col-6 col-md-4 ${
													idx % 2 === 0 ? 'order-md-2' : 'order-md-1'
												}`}>
												<img
													src={cat.images[0]}
													alt={cat.name}
													className={`img-fluid rounded shadow-sm category-img ${
														isMobile ? '' : 'side-panel-right'
													}`}
												/>
											</div>
											<div
												className={`col-6 col-md-4 ${
													idx % 2 === 0 ? 'order-md-2' : 'order-md-1'
												}`}>
												<img
													src={cat.images[1]}
													alt={cat.name}
													className={`img-fluid rounded shadow-sm category-img ${
														isMobile ? '' : 'side-panel-left'
													}`}
												/>
											</div>
										</div>
									</div>
								</Collapse>
							</div>
							<div
								style={{
									width: `${isActive ? '40%' : '30%'}`,
									height: '1px',
									background: `${isActive ? '#8d2f42' : '#aaa'}`,

									// background: '#8d2f42',
								}}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
