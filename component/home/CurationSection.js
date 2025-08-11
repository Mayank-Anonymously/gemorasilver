import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CurationSection = () => {
	return (
		<Container
			fluid
			className='py-5 align-items-center justify-content-center'>
			{/* First Row */}
			<Row className='align-items-center justify-content-center d-flex mb-5'>
				<Col
					md={7}
					className='mobile-size-banner'>
					<img
						src='/assets/product/woman.png'
						alt='Jewelry hand'
						className='img-fluid curation-img'
						style={{ backgroundColor: '#f7eee5' }}
					/>
				</Col>

				<Col
					md={4}
					className='mobile-size-banner-text'>
					<h3 className='fw-bold'>Curated By Color</h3>
					<p>Brighten up your look with vibrant gemstone jewelry.</p>
					<Button
						variant='outline'
						style={{
							backgroundColor: '#c37b5e',
							color: 'white',
							border: 'none',
							padding: '8px 20px',
							borderRadius: '4px',
						}}>
						SHOP NOW
					</Button>
				</Col>
			</Row>
			<Row className='align-items-center justify-content-center d-flex mb-5'>
				<Col
					md={7}
					className='mobile-size-banner'>
					<img
						src='/assets/product/jewelry.png'
						alt='Jewelry hand'
						className='img-fluid curation-img'
						style={{ backgroundColor: '#f7eee5' }}
					/>
				</Col>

				<Col
					md={4}
					className='mobile-size-banner-text'>
					<h3 className='fw-bold'>Curated By Color</h3>
					<p>Brighten up your look with vibrant gemstone jewelry.</p>
					<Button
						variant='outline'
						style={{
							backgroundColor: '#c37b5e',
							color: 'white',
							border: 'none',
							padding: '8px 20px',
							borderRadius: '4px',
						}}>
						SHOP NOW
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default CurationSection;
