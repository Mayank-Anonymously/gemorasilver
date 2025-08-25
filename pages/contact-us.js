// pages/ContactUs.js
'use client';

import Screen from '@/component/common/Screen';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function ContactUs() {
	return (
		<Screen>
			<section className='py-5 bg-light'>
				<Container>
					{/* Page Heading */}
					<Row className='mb-5'>
						<Col className='text-center'>
							<h2 className='fw-bold'>Contact Us</h2>
							<p className='text-muted'>
								Find us easily and reach out anytime. We’re here to help.
							</p>
						</Col>
					</Row>

					<Row className='g-4'>
						{/* Map Section */}
						<Col md={7}>
							<Card className='shadow-sm border-0 h-100'>
								<Card.Body className='p-0'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019882047152!2d-122.40135078468123!3d37.79361747975653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d8f27f3d%3A0xa3f2dbd54cf0c9d4!2sMarket%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1683648923451!5m2!1sen!2s'
										width='100%'
										height='400'
										style={{ border: 0 }}
										allowFullScreen=''
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'></iframe>
								</Card.Body>
							</Card>
						</Col>

						{/* Contact Info Section */}
						<Col md={5}>
							<Card className='shadow-sm border-0 h-100'>
								<Card.Body className='p-4'>
									<h5 className='fw-bold mb-3'>Our Office</h5>
									<p className='mb-2'>
										<strong>Address:</strong> 123 Market Street, Cityville,
										Country
									</p>
									<p className='mb-2'>
										<strong>Phone:</strong> +91 97601-92171
										<br />
										<strong>Phone:</strong> +91 96679-62063
									</p>
									<p className='mb-4'>
										<strong>Email:</strong> support@yourcompany.com
									</p>

									<h6 className='fw-bold mb-2'>Business Hours</h6>
									<p className='mb-1'>Mon – Fri: 9:00 AM – 6:00 PM</p>
									<p className='mb-1'>Sat: 10:00 AM – 4:00 PM</p>
									<p className='mb-0'>Sun: Closed</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</Screen>
	);
}
