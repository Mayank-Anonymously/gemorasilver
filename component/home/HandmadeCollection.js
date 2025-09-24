'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const journalData = [
	{
		id: 1,
		category: 'EDUCATION',
		title: 'Pearl Jewellery: June',
		author: 'By Luniva Sweetman',
		date: 'Mon, Jun 21, 2024',
		image: '/journal1.jpg',
	},
	{
		id: 2,
		category: 'WEDDING',
		title: 'A Gorgeous Guide To Weddings',
		author: 'By Luniva Sweetman',
		date: 'Fri, Dec 11, 2024',
		image: '/journal2.jpg',
	},
	{
		id: 3,
		category: 'NEW',
		title: 'Designing A Luniva Piece',
		author: 'By Luniva Sweetman',
		date: 'Sat, Jul 14, 2025',
		image: '/journal3.jpg',
	},
	{
		id: 4,
		category: 'EDUCATION',
		title: 'Five Ways To Find Your Partner’s Ring Size',
		author: 'By Luniva Sweetman',
		date: 'Fri, Sep 06, 2025',
		image: '/journal4.jpg',
	},
];

export default function ChupiJournal() {
	const [activeId, setActiveId] = useState(4); // default expanded card
	const activeItem = journalData.find((item) => item.id === activeId);

	return (
		<div className='container py-5'>
			{/* Heading */}
			<h2 className='text-center mb-5'>
				THE <span className='journal-highlight'>Luniva Journal</span>
			</h2>

			<div className='row g-4'>
				{/* Left Cards */}
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
										<small className='text-uppercase fw-bold text-muted'>
											{item.category}
										</small>
										<small className='text-muted'>{item.date}</small>
									</div>

									<h5 className='mt-2 mb-1 journal-title'>{item.title}</h5>

									{isActive && (
										<div className='mt-2'>
											<p className='text-muted small'>{item.author}</p>
											<button className='btn btn-dark rounded-pill px-4 py-1'>
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
