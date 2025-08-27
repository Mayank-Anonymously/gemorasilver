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

						{/* Contact Info Section */}
						<Col md={5}>
							<Card className='shadow-sm border-0 h-100'>
								<Card.Body className='p-4'>
									<h5 className='fw-bold mb-3'>Our Office</h5>

									<p className='mb-2'>
										<strong>Phone:</strong> +91 70557 01906 (Muskan)
										<br />
										<strong>Phone:</strong> +91 89232-50822 (Akanksha)
									</p>
									<p className='mb-4'>
										<strong>Email:</strong> info@gemorasilver.com
									</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</Screen>
	);
}
