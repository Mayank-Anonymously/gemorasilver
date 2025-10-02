import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { IoIosStar } from 'react-icons/io';
import { HOST } from '../apibaseurl';

const NewColllection = ({ products }) => {
	return (
		<div className='home-category'>
			<div className='opening-heading'>
				<h2
					style={{
						color: '#812d3e',
						fontFamily: "'Great Vibes', cursive",
						marginTop: 10,
					}}>
					Suggested by{' '}
					<span
						style={{
							color: '#812d3e',
							fontFamily: 'none',
							marginTop: 10,
						}}>
						Founders{' '}
					</span>
				</h2>
			</div>

			<Container fluid>
				<>
					<Row>
						{products.length > 0 ? (
							products.slice(0, 6).map((p, index) => (
								<Col
									key={index}
									xs={6}
									sm={4}
									md={6}
									lg={2} // full width on mobile, 2-per-row on small, etc.
									className='justify-content-center mb-2'>
									<div
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
													className='btn  fw-semibold cursor-pointer'
													style={{
														background:
															'linear-gradient(135deg, #ffd6e1 0%, #ff9ac6 100%)',
														color: '#000',
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
				</>
			</Container>
		</div>
	);
};

export default NewColllection;
