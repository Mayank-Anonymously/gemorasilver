import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosStar } from 'react-icons/io';
import { HOST } from '../apibaseurl';
import { useRouter } from 'next/navigation';

const NewColllection = ({ products, heading }) => {
	const router = useRouter();
	const [visibleCount, setVisibleCount] = useState(6); // initially show 6 products

	const handleSeeMore = () => {
		setVisibleCount((prev) => prev + 10); // load 10 more each click
	};

	return (
		<div className='home-category'>
			<div className='opening-heading'>{heading}</div>

			<Container fluid>
				<Row>
					{products.length > 0 ? (
						products.slice(0, visibleCount).map((p, index) => (
							<Col
								key={index}
								xs={6}
								sm={4}
								md={6}
								lg={2}
								className='justify-content-center mb-2'>
								<div
									onClick={() => router.push(`/product/${p._id}`)}
									className='product-card bg-white shadow-sm border-0 p-2 rounded-3'
									style={{
										display: 'flex',
										width: '100%',
										height: '100%',
										justifyContent: 'space-between',
										alignItems: 'center',
										flexDirection: 'column',
									}}>
									<img
										src={`${HOST}resources/${p.image}`}
										alt={p.title}
										className='img-fluid'
									/>

									<div className='w-100'>
										<div className='d-flex align-items-between justify-content-start mt-3 review'>
											<span className='fw-bold me-1'>5.0</span>
											<IoIosStar color={'gold'} />
											<span className='ms-1 text-muted'>| 15</span>
										</div>

										<div className='d-flex justify-content-start mt-2 flex-wrap'>
											<h5 className='mb-0 fw-bold text-dark me-2 product-price'>
												₹{p.priceSale}
											</h5>
											<p className='mb-0 text-muted text-decoration-line-through product-price-compare'>
												₹{p.price}
											</p>
										</div>

										<h6 className='product-tile-title'>{p.title}</h6>
										<div className='d-flex product-all-tiles justify-content-between'>
											<Link
												href={`/product/${p._id}`}
												className='btn cursor-pointer'
												style={{
													background: '#4c1d1d',
													color: 'white',
													borderRadius: 8,
													marginTop: 10,
												}}>
												View Product
											</Link>
										</div>
									</div>
								</div>
							</Col>
						))
					) : (
						<p className='text-center text-muted'>No products found.</p>
					)}
				</Row>

				{/* See More button */}
				{visibleCount < products.length && (
					<div className='text-center mt-3'>
						<button
							className='btn btn-dark rounded-pill px-4 py-1'
							onClick={handleSeeMore}
							style={{ backgroundColor: '#4c1d1d' }}>
							See More
						</button>
					</div>
				)}
			</Container>
		</div>
	);
};

export default NewColllection;
