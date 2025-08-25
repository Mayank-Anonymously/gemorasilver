import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CurationSection = () => {
	return (
		<>
			{/* <Container
				fluid
				className='py-5 align-items-center justify-content-center'>

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
							alt='Jewelry collection'
							className='img-fluid curation-img'
							style={{ backgroundColor: '#f7eee5' }}
						/>
					</Col>

					<Col
						md={4}
						className='mobile-size-banner-text'>
						<h3 className='fw-bold'>Curated By Style</h3>
						<p>Explore timeless and modern designs handpicked for you.</p>
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
			</Container> */}

			{/* --- Gallery Section --- */}
			<Container
				fluid
				className='py-5 bg-light'>
				<h2 className='text-center fw-bold mb-4 text-uppercase'>
					Satisfied Customer{' '}
				</h2>
				<Row className='g-3'>
					{/* Image 1 */}
					<Col
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<img
							src='/assets/gallery/jewel1.jpg'
							alt='Jewelry 1'
							className='img-fluid rounded shadow-sm gallery-item'
						/>
					</Col>

					{/* Image 2 */}
					<Col
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<img
							src='/assets/gallery/jewel2.jpg'
							alt='Jewelry 2'
							className='img-fluid rounded shadow-sm gallery-item'
						/>
					</Col>

					{/* Video 1 */}
					<Col
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<video
							controls
							className='w-100 rounded shadow-sm gallery-item'>
							<source
								src='/assets/gallery/video1.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</Col>

					{/* Image 3 */}
					<Col
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<img
							src='/assets/gallery/jewel3.jpg'
							alt='Jewelry 3'
							className='img-fluid rounded shadow-sm gallery-item'
						/>
					</Col>

					{/* Video 2 */}
					<Col
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<video
							controls
							className='w-100 rounded shadow-sm gallery-item'>
							<source
								src='/assets/gallery/video2.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CurationSection;
