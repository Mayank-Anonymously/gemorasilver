import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { products } from '../data/products';
import { CiSquarePlus } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoIosStar } from 'react-icons/io';
const NewColllection = () => {
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
				<Col
					xs={12}
					sm={4}
					md={9}
					lg={4}>
					<Row className='g-4'>
						{products.length > 0 ? (
							products.map((p, index) => (
								<Col
									key={index}
									xs={6}
									sm={4}
									md={6}
									lg={4} // full width on mobile, 2-per-row on small, etc.
									className='d-flex justify-content-center mb-4'>
									<div className='product-card bg-white shadow-sm border-0 p-2 rounded-3'>
										{/* Product Image */}
										<div
											className='justify-content-center align-items-center'
											style={{
												height: 140,
												width: 140,
												objectFit: 'contain',
											}}>
											<img
												src={p.images[0]}
												alt={p.title}
												className='img-fluid'
												// style={{ objectFit: 'contain', maxHeight: '100%' }}
											/>
										</div>
										{/* Rating */}
										<div className='d-flex align-items-between justify-content-start mt-3 review'>
											<span className='fw-bold me-1'>5.0</span>
											<IoIosStar color={'gold'} />

											<span className='ms-1 text-muted'>| 15</span>
										</div>
										{/* Price */}
										<div className='d-flex justify-content-start mt-2 flex-wrap'>
											<h5 className='mb-0 fw-bold text-dark me-2 product-price'>
												₹{p.price.toLocaleString()}
											</h5>
											<p className='mb-0 text-muted text-decoration-line-through product-price-compare'>
												₹{p.compare_at_price.toLocaleString()}
											</p>
										</div>
										{/* Title */}
										<h6 className=' product-tile-title'>{p.title}</h6>
										<div className='d-flex product-all-tiles justify-content-between'>
											<Link
												href={`/product/${p.id}`}
												className='btn  fw-semibold cursor-pointer'
												style={{
													backgroundColor: '#ffd6e1',
													color: '#000',
													borderRadius: 8,
													marginTop: 10,
												}}
												onClick={() => handleAddtoCart(p)}>
												<CiSquarePlus size={20} />
											</Link>
										</div>
									</div>
								</Col>
							))
						) : (
							<p className='text-center text-muted'>No products found.</p>
						)}
					</Row>
				</Col>
			</Container>
		</div>
	);
};

export default NewColllection;
