import { useRouter } from 'next/navigation';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PromoBannerSection = () => {
	const router = useRouter();

	return (
		<Container
			fluid
			className='px-0 promo-banner-section'>
			<Row className='g-1'>
				<Col
					md={6}
					className='promo-left d-flex   px-5 text-center'>
					<div className='promo-content text-white'>
						<small className='text-muted'>Luniva</small>
						<h2 className='fw-bold'>
							Jewellery
							<br />
							Online
						</h2>
						<div className='text-center mt-4'>
							<a
								onClick={() => router.push(`/category/jewellery-set`)}
								variant='outline'
								style={{
									backgroundColor: 'rgb(29 52 76)',
									color: 'white',
									border: 'none',
									padding: '8px 20px',
									borderRadius: '4px',
								}}>
								Explore
							</a>
						</div>
					</div>
				</Col>
				<Col
					md={6}
					className='promo-right d-flex  text-center rounded-sm'>
					<div className='promo-content text-white'>
						<small className='text-muted'>Luniva</small>
						<h2 className='fw-bold'>
							Rings
							<br />
							Online
						</h2>
						<div className='text-center mt-4'>
							<a
								onClick={() => router.push(`/category/rings`)}
								variant='outline'
								style={{
									backgroundColor: '#4c1d1d',
									color: 'white',
									border: 'none',
									padding: '8px 20px',
									borderRadius: '4px',
								}}>
								Explore
							</a>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default PromoBannerSection;
