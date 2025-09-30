import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PromoBannerSection = () => {
	return (
		<Container
			fluid
			className='px-0 promo-banner-section'>
			<Row className='g-0'>
				<Col
					md={6}
					className='promo-left d-flex align-items-center px-5 text-center'>
					<div className='promo-content text-dark'>
						<small className='text-muted'>Luniva</small>
						<h2 className='fw-bold'>
							Jewellery
							<br />
							Online
						</h2>
						<div className='text-center mt-4'>
							<Button
								variant='outline'
								style={{
									backgroundColor: '#c37b5e',
									color: 'white',
									border: 'none',
									padding: '8px 20px',
									borderRadius: '4px',
								}}>
								Explore
							</Button>
						</div>
					</div>
				</Col>
				<Col
					md={6}
					className='promo-right d-flex align-items-center justify-content-center text-center'>
					<div className='promo-content text-dark'>
						<small className='text-muted'>Luniva</small>
						<h2 className='fw-bold'>
							Rings
							<br />
							Online
						</h2>
						<div className='text-center mt-4'>
							<Button
								variant='outline'
								style={{
									backgroundColor: '#c37b5e',
									color: 'white',
									border: 'none',
									padding: '8px 20px',
									borderRadius: '4px',
								}}>
								Explore
							</Button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default PromoBannerSection;
