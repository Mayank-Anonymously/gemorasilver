import Screen from '@/component/common/Screen';
import BreadHomeBanner from '@/component/home/homebanner';
import React from 'react';
import { Container } from 'react-bootstrap';

const html = `<p>At <strong>Luniva by M &amp; A</strong>, we value your experience and strive to ensure you're completely satisfied with your purchase. Please review our return and refund policy below:</p>

<ol>
  <li>You may initiate a return within <strong>3 days</strong> of receiving your order.</li>
  <li>If the return is due to a sizing issue, we will send a replacement once we receive the originally delivered item in its original, undamaged condition.</li>
  <li>If you're not satisfied with your purchase, we request <strong>clear photo or video proof</strong> of the concern. Once our team reviews and accepts your request:
    <ul>
      <li>A return pickup will be arranged.</li>
      <li>After we receive the item, your refund will be processed within <strong>7–10 business days</strong> via your original payment method.</li>
    </ul>
  </li>
  <li>Returned items must be:
    <ul>
      <li>✅ Unused and unworn</li>
      <li>✅ In their original state</li>
      <li>✅ Complete with tags, certificates, and original packaging</li>
    </ul>
  </li>
  <li>If you receive an incorrect item, please capture an <strong>unboxing video</strong> and share it with us for prompt resolution.</li>
</ol>

<div style="border:1px solid #ccc; padding:10px; border-radius:8px; background:#f9f9f9;">
  <strong>⚠️ Important Note:</strong>  
  Items that do not comply with the above return conditions—such as used, damaged, or missing tags/packaging—will not be accepted and may be returned back to you.
</div>

<p>📩 To request a return, please contact us within <strong>3 days of delivery</strong> via:</p>
<ul>
  <li>Email: <a href="mailto:info@lunivajewels.com">info@lunivajewels.com</a></li>
  <li>WhatsApp: Use the <strong>“Chat with Us”</strong> feature on our website</li>
</ul>
`;
const Refund = () => {
	return (
		<Screen>
			<BreadHomeBanner />
			<Container>
				<h1>Return and Refund</h1>

				<div dangerouslySetInnerHTML={{ __html: html }} />
			</Container>
		</Screen>
	);
};

export default Refund;
