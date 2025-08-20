import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
	return (
		<div
			className='footer mt-5 pt-5 pb-3 text-muted'
			style={{
				background: `linear-gradient(to right, rgba(32, 0, 57, 0.95), rgba(32, 0, 57, 0.95)),
							 url('/assets/background-jewellery/clipart-footer.png') no-repeat right bottom`,
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
						<p>
							Corporate clients and leisure travelers has been relying on
							Groundlink for dependable safe, and professional
						</p>
						<p>
							<FaMapMarkerAlt className='me-2' />
							Brooklyn, New York, United States
						</p>
						<p>
							<FaPhone className='me-2' />
							(+123) 456-7898
						</p>
						<p>
							<FaEnvelope className='me-2' />
							example@example.com
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
									href='/privacy'
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
						</ul>
					</Col>

					<Col md={3}>
						<h6 className='fw-bold text-white'>QUICK LINKS</h6>
						<ul className='list-unstyled text-white'>
							<li>My Account</li>
							<li>Shopping Cart</li>
							<li>Login</li>
							<li>Register</li>
							<li>Checkout</li>
						</ul>
					</Col>
				</Row>

				<hr />
				<Row>
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
				</Row>

				<div className='d-flex justify-content-between align-items-center pt-2'>
					<small className='text-white'>
						© 2025 Powered by <strong>Gemora Silver By M&A</strong>. All Rights
						Reserved.
					</small>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
