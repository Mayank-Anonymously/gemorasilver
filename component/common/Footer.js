import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
	return (
		<div
			className='footer mt-5 pt-5 pb-3 text-muted'
			style={{
				background: `#812d3e`,
				backgroundSize: 'contain',
				padding: 10,
				marginLeft: 30,
				marginRight: 30,
				marginBottom: 30,
				borderRadius: 10,
				color: 'white',
			}}>
			<Container>
				<Row className='p-2'>
					<Col
						md={4}
						className='text-white'>
						<img
							src='/assets/logo.png'
							className='img-fluid footer-logo'
						/>
						<p>
							Discover timeless elegance with our hand-crafted jewellery
							collection. From everyday essentials to statement pieces, we bring
							you designs that blend luxury, quality, and affordability —
							perfect for every occasion.
						</p>
					</Col>

					<Col md={2}>
						<h6 className='fw-bold text-white'>OUR OFFER</h6>
						<ul className='list-unstyled text-white'>
							<li>Contact Us</li>
							<li>
								<a
									href='/about'
									className='text-decoration-none text-white'>
									About Us
								</a>
							</li>
							<li>
								<a
									href='/shipping-policy'
									className='text-decoration-none text-white'>
									{' '}
									Shipping Policy
								</a>
							</li>
							<li>
								<a
									href='/privacy-policy'
									className='text-decoration-none text-white'>
									{' '}
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href='/return-and-refund'
									className='text-decoration-none text-white'>
									{' '}
									Return & Refund Policy
								</a>
							</li>
							<li>
								<a
									href='/terms-and-conditions'
									className='text-decoration-none text-white'>
									{' '}
									Terms and Conditions
								</a>
							</li>
						</ul>
					</Col>

					{/* <Col md={3}>
						<h6 className='fw-bold text-white'>QUICK LINKS</h6>
						<ul className='list-unstyled text-white'>
							<li>My Account</li>
							<li>Shopping Cart</li>
							<li>Login</li>
							<li>Register</li>
							<li>Checkout</li>
						</ul>
					</Col> */}

					<Col md={3}>
						<p className='text-white'>
							<FaMapMarkerAlt className='me-2' />
							F-780, kamla nagar, Agra-282005
						</p>

						<p className='text-white'>
							<FaPhone className='me-2' />
							<strong>Phone:</strong> +91 70557 01906
							<br />
							<FaPhone className='me-2' />
							<strong>Phone:</strong> +91 89232-50822
						</p>
						<p className='text-white'>
							<FaEnvelope className='me-2' />
							info@lunivajewels.com
						</p>
					</Col>
				</Row>

				<hr />
				<Row>
					<Col>
						<div className='d-flex justify-content-between align-items-center pt-2'>
							<small className='text-white'>
								© 2025 Powered by <strong>Luniva By M&A</strong>. All Rights
								Reserved.
							</small>
						</div>
					</Col>
					<Col md={4}>
						<div
							className='payment-logos'
							style={{
								zIndex: 999999999999,
							}}>
							<img
								src='/assets/payments/visa.png'
								alt='Visa'
								height='50'
								className='me-2 rounded'
							/>
							<img
								src='/assets/payments/mastero.png'
								alt='Mastercard'
								height='40'
								className='me-2 rounded'
							/>
							<img
								src='/assets/payments/paypal.png'
								alt='PayPal'
								height='50'
								className='me-2 rounded'
							/>

							<img
								src='/assets/payments/rupay.png'
								alt='Visa Electron'
								height='50'
								className='rounded'
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
