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

    // New categories with default values
    {
    	name: 'Rings',
    	count: 10,
    	description: 'Explore our beautiful rings collection.',
    	images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
    },
    {
    	name: 'Earrings',
    	count: 10,
    	description: 'Find earrings to match every style.',
    	images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
    },
    {
    	name: 'Pendants',
    	count: 10,
    	description: 'Elegant pendants for every occasion.',
    	images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
    },
    {
    	name: 'Mangalsutra',
    	count: 10,
    	description: 'Traditional and modern Mangalsutra designs.',
    	images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
    },
    {
    	name: 'Set',
    	count: 10,
    	description: 'Beautiful matching sets of pendants and earrings.',
    	images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
    },
    {
    	name: 'Toe Rings',
    	count: 10,
    	description: 'Stylish toe rings for every occasion.',
    	images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
    },
    {
    	name: 'Anklets',
    	count: 3,
    	description: 'Stylish toe rings for every occasion.',
    	images: ['/assets/product/ring-tile.jpg', '/assets/product/ring-tile.jpg'],
    },

];

export default function Categories() {
const [active, setActive] = useState('Rings');

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
    										See Product
    									</button>

    									{/* Images */}
    									<div className='row mt-4 g-3'>
    										<div>
    											<img
    												src={cat.images[0]}
    												alt={cat.name}
    												className='img-fluid rounded shadow-sm category-img side-panel-right'
    											/>
    										</div>
    										<div className={`col-6 col-md-4 ${
    												idx % 2 === 0 ? 'order-md-2' : 'order-md-1'
    											}`}>
    											<img
    												src={cat.images[1]}
    												alt={cat.name}
    												className='img-fluid rounded shadow-sm category-img side-panel-left'
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
