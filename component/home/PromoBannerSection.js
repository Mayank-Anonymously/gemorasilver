import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PromoBannerSection = () => {
	return (
		<Container
			fluid
			className='px-0 promo-banner-section'>
			<Row className='g-1'>
				<Col
					md={6}
					className='promo-left d-flex justify-content-center   px-5 text-center'>
					<div className='promo-content text-dark'>
						<small className='text-muted'>Luniva</small>
						<h2 className='fw-bold'>
							Jewellery
							<br />
							Online
						</h2>
						<div className='text-center mt-4'>
							<Button
								onClick={() => router.push(`/category/jewellery-online`)}
								variant='outline'
								style={{
									backgroundColor: '#4c1d1d',
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
					className='promo-right d-flex  justify-content-center text-center rounded-sm'>
					<div className='promo-content text-dark'>
						<small className='text-muted'>Luniva</small>
						<h2 className='fw-bold'>
							Rings
							<br />
							Online
						</h2>
						<div className='text-center mt-4'>
							<Button
								onClick={() => router.push(`/category/ring-online`)}
								variant='outline'
								style={{
									backgroundColor: '#4c1d1d',
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
