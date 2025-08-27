import Screen from '@/component/common/Screen';
import BreadHomeBanner from '@/component/home/homebanner';
import React from 'react';
import { Container } from 'react-bootstrap';

const html = `<ul> 
  <li><b>📦 Where We Ship</b></li> 
</ul> 
<p>We proudly deliver our handcrafted 925 silver jewelry across India, reaching customers in every corner of the country.</p> 


<ul> 
  <li><b>💰 Shipping Charges</b></li> 
</ul> 
<p>✨ Complimentary shipping is available on purchases over ₹999.</p> 
<p>For orders below ₹999, a minimal shipping fee will be added, with the exact cost shown during checkout.</p> 

<ul> 
  <li><b>⏱️ Dispatch & Delivery Timelines</b></li> 
</ul> 
<p><b>🛠️ Order Processing & Dispatch:</b> All confirmed orders are processed and dispatched within 3–4 business days.</p> 
<p><b>🚚 Estimated Delivery:</b> Orders typically arrive within 5–7 business days from the dispatch date, depending on your location.</p> 
<p><b>📍 Please Note:</b> Deliveries to remote or hard-to-reach areas may require additional time.</p> 

<ul> 
  <li><b>🔎 Order Tracking</b></li> 
</ul> 
<p>As soon as your order is dispatched, you will receive a tracking link via email, SMS, or WhatsApp, allowing you to monitor your package’s progress in real time for a seamless delivery experience.</p> 

<ul> 
  <li><b>🏠 Delivery Address & Attempts</b></li> 
</ul> 
<p>To ensure smooth and timely delivery, please provide a full and accurate shipping address at checkout, including any necessary details such as landmarks or apartment numbers.</p> 
<p>📦 Our delivery partners will make multiple attempts to deliver your order. If no one is available to receive the package, it may be returned to us. In such cases, reshipping the order may require an additional delivery fee.</p> 
<p>⚠️ We are not responsible for delays or failed deliveries resulting from incomplete or incorrect address information.</p> 

<ul> 
  <li><b>⛔ Delays & Exceptions</b></li> 
</ul> 
<p>Although we make every effort to deliver your order within the estimated timeframe, occasional delays may occur due to unforeseen circumstances such as 🌧️ natural disasters, 🏖️ public holidays, or logistical challenges beyond our control. We sincerely appreciate your understanding and patience during these rare situations.</p> 

<ul> 
  <li><b>🚀 Shipping Policy</b></li> 
</ul> 
<p>We collaborate with trusted courier partners to ensure your precious jewelry is delivered safely and promptly. Our commitment is to provide you with a seamless and reliable shipping experience from our door to yours.</p> 

<ul> 
  <li><b>💝 Important Note</b></li> 
</ul> 
<p>We take utmost care in securely packaging your jewelry to ensure it reaches you in perfect condition. Your trust means everything to us, and we’re always here to support you with any questions or concerns.</p> 

<p>📩 For any shipping-related inquiries, feel free to reach out:</p> 
<p><b>Email:</b> ✉️ info@gemorasilver.com</p> 
<p><b>WhatsApp:</b> 💬 Chat with us</p> 
`;
const Shipping = () => {
	return (
		<Screen>
			<BreadHomeBanner />
			<Container className='p-5'>
				<h1>Shipping Policy</h1>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</Container>
		</Screen>
	);
};

export default Shipping;
