import Screen from '@/component/common/Screen';
import BreadHomeBanner from '@/component/home/homebanner';
import React from 'react';
import { Container } from 'react-bootstrap';

const html = `<ul> 
  <b>📦 Where We Ship</b> 
</ul> 
<p>We proudly deliver our handcrafted 925 silver jewelry across India, reaching customers in every corner of the country.</p> 


<ul> 
  <b>💰 Shipping Charges</b> 
</ul> 
<p>✨ Complimentary shipping is available on purchases over ₹999.</p> 
<p>For orders below ₹999, a minimal shipping fee will be added, with the exact cost shown during checkout.</p> 

<ul> 
  <b>⏱️ Dispatch & Delivery Timelines</b> 
</ul> 
<p><b>🛠️ Order Processing & Dispatch:</b> All confirmed orders are processed and dispatched within 3–4 business days.</p> 
<p><b>🚚 Estimated Delivery:</b> Orders shipped and delivered arrive within 5–7 business days from the dispatch date, depending on your location.</p> 
<p><b>📍 Please Note:</b> Deliveries to remote or hard-to-reach areas may require additional time.</p> 

<ul> 
  <b>🔎 Order Tracking</b> 
</ul> 
<p>As soon as your order is dispatched, you will receive a tracking link via email, SMS, or WhatsApp, allowing you to monitor your package’s progress in real time for a seamless delivery experience.</p> 

<ul> 
  <b>🏠 Delivery Address & Attempts</b> 
</ul> 
<p>To ensure smooth and timely delivery, please provide a full and accurate shipping address at checkout, including any necessary details such as landmarks or apartment numbers.</p> 
<p>📦 Our delivery partners will make multiple attempts to deliver your order. If no one is available to receive the package, it may be returned to us. In such cases, reshipping the order may require an additional delivery fee.</p> 
<p>⚠️ We are not responsible for delays or failed deliveries resulting from incomplete or incorrect address information.</p> 

<ul> 
  <b>⛔ Delays & Exceptions</b> 
</ul> 
<p>Although we make every effort to deliver your order within the estimated timeframe, occasional delays may occur due to unforeseen circumstances such as 🌧️ natural disasters, 🏖️ public holidays, or logistical challenges beyond our control. We sincerely appreciate your understanding and patience during these rare situations.</p> 

<ul> 
  <b>🚀 Shipping Policy</b> 
</ul> 
<p>We collaborate with trusted courier partners to ensure your precious jewelry is delivered safely and promptly. Our commitment is to provide you with a seamless and reliable shipping experience from our door to yours.</p> 

<ul> 
  <b>💝 Important Note</b> 
</ul> 
<p>We take utmost care in securely packaging your jewelry to ensure it reaches you in perfect condition. Your trust means everything to us, and we’re always here to support you with any questions or concerns.</p> 

<p>📩 For any shipping-related inquiries, feel free to reach out:</p> 
<p><b>Email:</b> ✉️ info@lunivajewels.com</p> 
<p><b>WhatsApp:</b> 💬 Chat with us</p> 
`;
const Shipping = () => {
	return (
		<Screen>
			<Container className='p-5'>
				<h1>Shipping Policy</h1>
				<div
					dangerouslySetInnerHTML={{ __html: html }}
					className='mt-5'
				/>
			</Container>
		</Screen>
	);
};

export default Shipping;
