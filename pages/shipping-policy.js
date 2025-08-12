import Screen from '@/component/common/Screen';
import BreadHomeBanner from '@/component/home/homebanner';
import React from 'react';
import { Container } from 'react-bootstrap';

const html = `<ul>
<li>Where We Ship</li>
</ul>
<p>We proudly deliver our handcrafted 925 silver jewelry across India, reaching customers in every corner of the country.</p>
<ul>
<li>Shipping Charges&nbsp;</li>
</ul>
<p>Complimentary shipping is available on purchases over ₹999.</p>
<p>For orders below ₹999, a minimal shipping fee will be added, with the exact cost shown during checkout.&nbsp;</p>
<ul>
<li>Dispatch &amp; Delivery Timelines</li>
</ul>
<p>Order Processing &amp; Dispatch: All confirmed orders are processed and dispatched within 3&ndash;4 business days.</p>
<p>Estimated Delivery: Orders typically arrive within 5&ndash;7 business days from the dispatch date, depending on your location.</p>
<p>Please Note: Deliveries to remote or hard-to-reach areas may require additional time.</p>
<ul>
<li>Order Tracking</li>
</ul>
<p>As soon as your order is dispatched, you will receive a tracking link via email, SMS, or WhatsApp, allowing you to monitor your package&rsquo;s progress in real time for a seamless delivery experience.</p>
<ul>
<li>Delivery Address &amp; Attempts</li>
</ul>
<p>To ensure smooth and timely delivery, please provide a full and accurate shipping address at checkout, including any necessary details such as landmarks or apartment numbers. Our delivery partners will make multiple attempts to deliver your order. If no one is available to receive the package, it may be returned to us. In such cases, reshipping the order may require an additional delivery fee. We are not responsible for delays or failed deliveries resulting from incomplete or incorrect address information.</p>
<ul>
<li>Delays &amp; Exceptions</li>
</ul>
<p>Although we make every effort to deliver your order within the estimated timeframe, occasional delays may occur due to unforeseen circumstances such as natural disasters, public holidays, or logistical challenges beyond our control. We sincerely appreciate your understanding and patience during these rare situations.</p>
<ul>
<li>Shipping Policy</li>
</ul>
<p>We collaborate with trusted courier partners to ensure your precious jewelry is delivered safely and promptly. Our commitment is to provide you with a seamless and reliable shipping experience from our door to yours.</p>
<ul>
<li>Important Note (in box)</li>
</ul>
<p>We take utmost care in securely packaging your jewelry to ensure it reaches you in perfect condition. Your trust means everything to us, and we&rsquo;re always here to support you with any questions or concerns.</p>
<p>For any shipping-related inquiries, feel free to reach out:</p>
<p>Email-</p>
<p>WhatsApp number-Chat with us.</p>
<!-- Comments are visible in the HTML source only -->`;
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
