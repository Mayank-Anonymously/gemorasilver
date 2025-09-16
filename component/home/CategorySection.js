import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CategorySection = () => {
	return (
		<div className='home-category'>
			<div className='opening-heading'>
				<h2>
					Categories{' '}
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
					{Array.from({ length: 1 }).map((_, index) => (
						<Col
							// data-aos='fade-up'
							key={index}
							className='text-center mt-5 category-section-card'
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
								<h3
									style={{
										color: '#812d3e',
										fontFamily: "'Great Vibes', cursive",
										fontSize: 65,
										marginTop: 10,
									}}>
									Ring
								</h3>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default CategorySection;
