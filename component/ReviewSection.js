import { FaStar } from 'react-icons/fa';

export default function ReviewSection() {
	const reviews = [
		{
			id: 1,
			name: 'Ananya Sharma',
			rating: 5,
			comment:
				'Absolutely loved the jewelry! The quality is amazing and delivery was super fast.',
			date: 'September 15, 2025',
		},
		{
			id: 2,
			name: 'Rahul Mehta',
			rating: 4,
			comment:
				'Beautiful designs. The packaging was elegant too. Slight delay in delivery, but worth it.',
			date: 'September 20, 2025',
		},
		{
			id: 3,
			name: 'Simran Kaur',
			rating: 5,
			comment:
				'Great customer service and the ring fits perfectly. Highly recommend!',
			date: 'October 2, 2025',
		},
	];

	return (
		<section className='py-5'>
			<div className='container'>
				<h3
					className='fw-bold text-center mb-4'
					style={{ color: '#812d3e' }}>
					Customer Reviews
				</h3>

				<div className='row g-4'>
					{reviews.map((review) => (
						<div
							className='col-md-4'
							key={review.id}>
							<div className='p-4 rounded shadow-sm h-100 bg-light'>
								{/* Stars */}
								<div className='mb-2'>
									{Array.from({ length: 5 }).map((_, index) => (
										<FaStar
											key={index}
											color={index < review.rating ? '#f5c518' : '#d3d3d3'}
										/>
									))}
								</div>

								{/* Comment */}
								<p
									className='mb-3'
									style={{ fontStyle: 'italic' }}>
									"{review.comment}"
								</p>

								{/* Name + Date */}
								<h6
									className='mb-0 fw-bold'
									style={{ color: '#812d3e' }}>
									{review.name}
								</h6>
								<small className='text-muted'>{review.date}</small>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
