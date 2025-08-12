import Screen from '@/component/common/Screen';
import React from 'react';
import { Container } from 'react-bootstrap';

const html = `<p>At Gemora Silver by M &amp; A, we value your experience and strive to ensure you're completely satisfied with your purchase. Kindly review our return and refund terms below:&nbsp;</p>
<ol>
<li>You may initiate a return within <strong><em>3 days&nbsp;</em></strong>of receiving your order.</li>
<li>If the return is due to a sizing issue, we will send a replacement once we receive the originally delivered item in its original, undamaged condition.</li>
<li>If you're not happy with your purchase, we kindly ask for clear **photo or video proof** of concern. Once our team reviews and accepts the request, a return pickup will be arranged. After we receive the item, your refund will be processed within **7 to 10 business days** via your original payment method.</li>
</ol>
<ol start="4">
<li>Returned items must be:</li>
</ol>
<p>* Unused and unworn*</p>
<p>* In their original state*</p>
<p>* Complete with tags, certificates, and original packaging*</p>
<ol start="5">
<li>If you receive the wrong or an incorrect item, please ensure to capture an **unboxing video** and send it to us as proof for prompt resolution&nbsp;</li>
</ol>
<ul>
<li>Please Note: (in box )</li>
</ul>
<p>&nbsp;</p>
<p>Items that do not comply with the above return conditions&mdash;such as used, damaged, or missing tags/packaging&mdash;will not be accepted and may be sent back to you.</p>
<p>&nbsp;</p>
<p>To request a return, contact us within **3 days of delivery** either via email at [insert email address] (info Gemora silver) or by using the **&ldquo;Chat with Us&rdquo;(WhatsApp)** feature on our website.</p>`;
const Refund = () => {
	return (
		<Screen>
			<Container>
				<h1>Return and Refund</h1>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</Container>
		</Screen>
	);
};

export default Refund;
