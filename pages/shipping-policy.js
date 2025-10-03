import Screen from '@/component/common/Screen';
import {
	FaShippingFast,
	FaRupeeSign,
	FaBoxOpen,
	FaSearchLocation,
	FaMapMarkerAlt,
	FaExclamationTriangle,
	FaRocket,
	FaHeart,
	FaEnvelope,
	FaWhatsapp,
} from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import React from 'react';
import { Container } from 'react-bootstrap';

const html = `
  
`;
const Shipping = () => {
	return (
		<Screen>
			<Container
				fluid
				className='mt-5'
				style={{ background: '#fff4f4', padding: 44, marginTop: 50 }}>
				<h1>Shipping Policy</h1>
				<div style={{ lineHeight: '1.7', color: '#333' }}>
					<b>
						<FaShippingFast color='#812d3e' /> Where We Ship
					</b>
					<p>
						We proudly deliver our handcrafted 925 silver jewelry across India,
						reaching customers in every corner of the country.
					</p>

					<b>
						<FaRupeeSign color='#812d3e' /> Shipping Charges
					</b>
					<p>Complimentary shipping is available on purchases over ₹999.</p>
					<p>
						For orders below ₹999, a minimal shipping fee will be added, with
						the exact cost shown during checkout.
					</p>

					<b>
						<MdAccessTime color='#812d3e' /> Dispatch & Delivery Timelines
					</b>
					<p>
						<b>Order Processing & Dispatch:</b> All confirmed orders are
						processed and dispatched within 3–4 business days.
					</p>
					<p>
						<b>Estimated Delivery:</b> Orders shipped and delivered arrive
						within 5–7 business days from the dispatch date, depending on your
						location.
					</p>
					<p>
						<b>Please Note:</b> Deliveries to remote or hard-to-reach areas may
						require additional time.
					</p>

					<b>
						<FaSearchLocation color='#812d3e' /> Order Tracking
					</b>
					<p>
						As soon as your order is dispatched, you will receive a tracking
						link via email, SMS, or WhatsApp, allowing you to monitor your
						package’s progress in real time for a seamless delivery experience.
					</p>

					<b>
						<FaMapMarkerAlt color='#812d3e' /> Delivery Address & Attempts
					</b>
					<p>
						To ensure smooth and timely delivery, please provide a full and
						accurate shipping address at checkout, including any necessary
						details such as landmarks or apartment numbers.
					</p>
					<p>
						Our delivery partners will make multiple attempts to deliver your
						order. If no one is available to receive the package, it may be
						returned to us. In such cases, reshipping the order may require an
						additional delivery fee.
					</p>
					<p>
						<b>NOTE:</b> We are not responsible for delays or failed deliveries
						resulting from incomplete or incorrect address information.
					</p>

					<b>
						<FaExclamationTriangle color='#812d3e' /> Delays & Exceptions
					</b>
					<p>
						Although we make every effort to deliver your order within the
						estimated timeframe, occasional delays may occur due to unforeseen
						circumstances such as natural disasters, public holidays, or
						logistical challenges beyond our control. We sincerely appreciate
						your understanding and patience during these rare situations.
					</p>

					<b>
						<FaRocket color='#812d3e' /> Shipping Policy
					</b>
					<p>
						We collaborate with trusted courier partners to ensure your precious
						jewelry is delivered safely and promptly. Our commitment is to
						provide you with a seamless and reliable shipping experience from
						our door to yours.
					</p>

					<b>
						<FaHeart color='#812d3e' /> Important Note
					</b>
					<p>
						We take utmost care in securely packaging your jewelry to ensure it
						reaches you in perfect condition. Your trust means everything to us,
						and we’re always here to support you with any questions or concerns.
					</p>

					<b>
						<FaEnvelope color='#812d3e' /> Contact Us
					</b>
					<p> For any shipping-related inquiries, feel free to reach out:</p>
					<p>
						<FaEnvelope /> <b>Email:</b> info@lunivajewels.com
					</p>
					<p>
						<FaWhatsapp color='green' /> <b>WhatsApp:</b> Chat with us
					</p>
				</div>
			</Container>
		</Screen>
	);
};

export default Shipping;
