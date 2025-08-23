import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CategorySection = () => {
	return (
		<>
			<Container fluid>
				<Row>
					{Array.from({ length: 4 }).map((_, index) => (
						<Col
							data-aos='fade-up'
							key={index}
							className='text-center mt-5 category-section-card'>
							<img
								src='/assets/product/ring-category.png'
								className='img-fluid category-section-image'
							/>
							<h3>Ring</h3>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default CategorySection;
