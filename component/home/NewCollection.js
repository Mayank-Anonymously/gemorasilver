import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { products } from '../data/products';
import { CiSquarePlus } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
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
					Recommended by{' '}
					<span
						style={{
							color: '#812d3e',
							fontFamily: 'none',
							marginTop: 10,
						}}>
						M&A{' '}
					</span>
				</h2>
			</div>
			<Container fluid>
				<Row className='home-category-container'>
					{products.map((rex, index) => (
						<Col
							data-aos='fade-up'
							key={index}
							className='mt-5 category-section-card'
							xs={5}
							sm={6}
							md={4}
							lg={2}>
							<Link
								href='/category/ring'
								className='text-decoration-none'>
								<img
									src={rex.images[0]}
									className='img-fluid'
								/>
								<div className='product-showcase-text'>
									<h6
										className='title'
										style={{
											color: '#812d3e',
											fontSize: 19,
											marginTop: 10,
										}}>
										{rex.title}
									</h6>
									<div className='price'>
										<span className='d-flex'>
											<p
												className='original'
												style={{
													color: '#812d3e',
													fontSize: 20,
													fontStyle: 'italic',
												}}>
												₹{rex.price}
											</p>
											<p
												className='regular'
												style={{
													color: '#812d3e',
													fontSize: 20,
													fontStyle: 'italic',
												}}>
												₹{rex.compare_at_price}
											</p>
										</span>
									</div>
									<div className='home-category-button'>
										<button
											className='btn fw-semibold cursor-pointer'
											style={{
												backgroundColor: '#ffd6e1',
												color: '#000',
												borderRadius: 8,
											}}
											onClick={() => handleAddtoCart(rex)}>
											<CiSquarePlus size={20} />
										</button>
										<button
											className='btn  fw-semibold cursor-pointer'
											style={{
												backgroundColor: '#ffd6e1',
												color: '#000',
												borderRadius: 8,
											}}
											onClick={() => console(rex)}>
											<CiHeart
												size={20}
												style={{ fontWeight: 'bold' }}
											/>
										</button>
									</div>
								</div>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default NewColllection;
