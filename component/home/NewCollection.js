import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { products } from '../data/products';

const NewColllection = () => {
	return (
		<div className='home-category'>
			<div className='opening-heading'>
				<h2>
					Recommended by M&A{' '}
					<span
						style={{
							color: '#812d3e',
							fontFamily: "'Great Vibes', cursive",
							marginTop: 10,
						}}></span>
				</h2>
			</div>
			<Container fluid>
				<Row style={{ justifyContent: 'space-around', alignItems: 'center' }}>
					{products.map((rex, index) => (
						<Col
							// data-aos='fade-up'
							key={index}
							className=' mt-5 category-section-card'
							xs={2}
							sm={8}
							md={4}
							lg={2}>
							<Link
								href='/category/ring'
								className='text-decoration-none '>
								<img
									src='/assets/product/ring-tile.jpg'
									className='img-fluid category-section-image'
								/>
								<h6
									style={{
										color: '#812d3e',
										fontSize: 19,
										marginTop: 10,
									}}>
									{rex.title}
								</h6>
								<p
									style={{
										color: '#812d3e',
										fontSize: 18,
										marginTop: -10,
									}}>
									{rex.category}
								</p>
								<p
									style={{
										color: '#812d3e',
										fontSize: 20,
										fontStyle: 'italic',
									}}>
									₹{rex.price}
								</p>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default NewColllection;
