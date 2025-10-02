'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const journalData = [
	{
		id: 1,
		category: 'EDUCATION',
		title: 'Ring Size Scale',
		author: '-By Luniva',
		date: '',
		image: '/assets/journal/journal.png',
	},
	{
		id: 2,
		category: 'WEDDING',
		title: 'Cocktail design',
		author: '-By Luniva',
		date: '',
		image: '/assets/journal/journal.png',
	},
	{
		id: 3,
		category: 'NEW',
		title: 'Working professions',
		author: '-By Luniva',
		date: '',
		image: '/assets/journal/journal.png',
	},
	{
		id: 4,
		category: 'EDUCATION',
		title: 'Party collection',
		
		author: '-By Luniva',
		date: '',
		image: '/assets/journal/journal.png',
	},
];

export default function ChupiJournal() {
	const [activeId, setActiveId] = useState(4); // default expanded card
	const activeItem = journalData.find((item) => item.id === activeId);

	return (
		<div className='container py-5'>
			<h2 className='text-center mb-5'>
				<span className='journal-highlight'>THE Luniva Journal</span>
			</h2>

			<div className='row g-4'>
				<div className='col-md-6'>
					<div className='journal-stack'>
						{journalData.map((item) => {
							const isActive = item.id === activeId;
							return (
								<div
									key={item.id}
									className={`journal-card p-3 rounded mb-3 ${
										isActive ? 'active' : ''
									}`}
									onClick={() => setActiveId(item.id)}>
									<div className='d-flex justify-content-between align-items-center'>
										<small className='text-muted'>{item.date}</small>
									</div>

									<h5
										style={{ fontFamily: 'serif;' }}
										className='mt-2 mb-1 journal-title'>
										{item.title}
									</h5>

									{isActive && (
										<div className='mt-2'>
											<p className='text-muted small'>{item.author}</p>
											<button
												className='btn btn-dark rounded-pill px-4 py-1'
												onClick={() =>
													router.push(`/category/${item.title.toLowerCase()}`)
												}
												style={{ backgroundColor: '#4c1d1d' }}>
												See More
											</button>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>

				{/* Right Image */}
				<div className='col-md-6 d-flex align-items-center justify-content-center'>
					{activeItem && (
						<img
							src={activeItem.image}
							alt={activeItem.title}
							className='img-fluid rounded shadow journal-img'
						/>
					)}
				</div>
			</div>
		</div>
	);
}
