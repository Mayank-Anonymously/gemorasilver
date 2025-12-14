import Screen from '@/component/common/Screen';
import BreadHomeBanner from '@/component/home/homebanner';
import { useRouter } from 'next/router';
import React from 'react';

const terms = () => {
	const router = useRouter();
	return (
		<Screen
			title='Terms & Conditions | Luniva Jewels'
			description={`Review the terms and conditions governing the use of Luniva Jewels services and website.`}
			canonical={router.asPath}>
			<div
				className='mt-5'
				style={{ background: '#fff4f4', padding: 44, marginTop: 50 }}
				dangerouslySetInnerHTML={{
					__html: `<!DOCTYPE html>

                    <div class="container p-3">
  <h5>Terms & Conditions – Luniva</h5>

  <p>Welcome to <strong>lunivajewels.com</strong>!</p>
  <p>These Terms and Conditions outline the rules and regulations for the use of Luniva’s website, located at <a href="https://lunivajewels.com">https://lunivajewels.com</a>.</p>
  <p>By accessing this website, you agree to accept these Terms and Conditions in full. If you do not agree with any part of these terms, please discontinue the use of lunivajewels.com.</p>

  <b>Definitions</b>
  <p>The following terminology applies to these Terms and Conditions, Privacy Policy, and Disclaimer Notice, as well as all related agreements:</p>
  <ul>
    <li><strong>“Client”, “You”, “Your”</strong> – refers to the individual accessing the website and accepting the Company’s terms.</li>
    <li><strong>“The Company”, “Ourselves”, “We”, “Our”, “Us”</strong> – refers to Luniva.</li>
    <li><strong>“Party”, “Parties”</strong> – refers collectively to both the Client and Luniva.</li>
  </ul>

  <b>Cookies</b>
  <p>We use cookies to enhance your browsing experience. By accessing lunivajewels.com, you consent to the use of cookies in line with Luniva’s Privacy Policy.</p>

  <b>License</b>
  <p>Unless otherwise stated, Luniva and/or its licensors own the intellectual property rights for all material on lunivajewels.com. All rights are reserved. You may access this website for personal use, subject to the restrictions outlined in these Terms.</p>
  <p>You must not:</p>
  <ul>
    <li>Republish material from lunivajewels.com</li>
    <li>Sell, rent, or sub-license material from lunivajewels.com</li>
    <li>Reproduce, duplicate or copy content from lunivajewels.com</li>
    <li>Redistribute content without prior permission</li>
  </ul>

  <b>User Comments</b>
  <p>Parts of this website may allow users to post comments, opinions, or feedback. Luniva does not pre-screen or edit user comments before they appear. The views expressed in comments belong solely to the individuals who post them.</p>

  <b>Hyperlinking to Our Content</b>
  <p>Certain organizations such as government agencies, search engines, news organizations, and online directories may link to our website without prior approval. Other organizations may request permission. Approval will be granted if the link is appropriate, non-deceptive, and contextually relevant.</p>

  <b>iFrames</b>
  <p>You may not create frames around our webpages that alter the appearance or functionality of the site without prior written consent.</p>

  <b>Content Liability</b>
  <p>We are not responsible for content that appears on external websites linking to lunivajewels.com. You agree to indemnify Luniva against any claims arising from your linking practices.</p>

  <b>Reservation of Rights</b>
  <p>We reserve the right to request removal of any links to our website. By continuing to link to lunivajewels.com, you agree to comply with these Terms. We may amend these Terms and our linking policy at any time.</p>

  <b>Disclaimer</b>
  <p>To the fullest extent permitted by law, Luniva disclaims all warranties, representations, and conditions regarding the website and its use.</p>
  <p>Nothing in this disclaimer will limit or exclude:</p>
  <ul>
    <li>Liability for death or personal injury caused by negligence</li>
    <li>Liability for fraud or misrepresentation</li>
    <li>Any liability not permitted to be excluded by law</li>
  </ul>

  <b>Governing Law</b>
  <p>These Terms of Service and any related agreements shall be governed by and construed in accordance with the laws of India.</p>
</div>
  `,
				}}
			/>
		</Screen>
	);
};

export default terms;
