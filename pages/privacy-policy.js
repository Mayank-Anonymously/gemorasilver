import Screen from '@/component/common/Screen';
import BreadHomeBanner from '@/component/home/homebanner';
import React from 'react';

const privacy = () => {
	return (
		<Screen>
			<BreadHomeBanner />
			<div
				dangerouslySetInnerHTML={{
					__html: `<div class="container">
    <div>
      <header>
        <h1 id="policy-title">Privacy Policy</h1>
        <div class="updated">Last updated: March 23, 2023</div>
      </header>

      <section>
        <p>This Privacy Policy explains how we collect, use, and disclose information when you use our services, and it describes your privacy rights. By using our Service you agree to the collection and use of your information in accordance with this policy.</p>
      </section>

      <h2>Interpretation &amp; Definitions</h2>
      <p><strong>Interpretation:</strong> Words with initial capital letters have specific meanings defined below. These definitions apply whether the terms appear in singular or plural form.</p>

      <h2>Definitions</h2>
      <p>For the purposes of this policy:</p>
      <ul>
        <li><strong>Account</strong>: a unique profile created for you to access our Service.</li>
        <li><strong>Affiliate</strong>: an entity that controls, is controlled by, or is under common control with a party (control = 50%+ voting interest).</li>
        <li><strong>Company</strong>: “Luniva”, F-780, kamla nagar, Agra, Uttar Pradesh. Referred to as “We”, “Us”, or “Our”.</li>
        <li><strong>Cookies</strong>: small files placed on your device by a website to store browsing-related data.</li>
        <li><strong>Country</strong>: Uttar Pradesh, India.</li>
        <li><strong>Device</strong>: any device that can access the Service (computer, smartphone, tablet).</li>
        <li><strong>Personal Data</strong>: any information that can identify an individual.</li>
        <li><strong>Service</strong>: the Website and related services.</li>
        <li><strong>Service Provider</strong>: third parties who process data on our behalf.</li>
        <li><strong>Third-party Social Media Service</strong>: e.g., Google, Facebook, Twitter, LinkedIn used to register or log in.</li>
        <li><strong>Usage Data</strong>: data collected automatically (IP address, browser type, pages visited, timestamps).</li>
        <li><strong>Website</strong>: lunivajewels.com (<a href="https://lunivajewels.com" target="_blank" rel="noopener">https://lunivajewels.com</a>).</li>
        <li><strong>You</strong>: the individual or entity using the Service.</li>
      </ul>

      <h2>Collection &amp; Use of Data</h2>
      <h3>Types of Data Collected</h3>
      <p><strong>Personal Data:</strong> We may request information such as your name, email address, phone number, and postal address when you use our Service.</p>

      <p><strong>Usage Data:</strong> Collected automatically and may include your IP address, browser type, pages visited, dates and times of visits, device information, unique identifiers, and diagnostic data.</p>

      <p><strong>Third-Party Social Media Data:</strong> If you register or log in through Google, Facebook, Twitter, or LinkedIn, we may obtain data associated with that account (e.g., name, email, contacts) consistent with your permissions.</p>

      <h3>Cookies &amp; Tracking</h3>
      <p>We use cookies, web beacons, tags, and similar technologies to understand usage and improve the Service. Types we use include:</p>
      <ul>
        <li><strong>Essential / Session Cookies:</strong> required for authentication and essential features.</li>
        <li><strong>Acceptance Cookies (Persistent):</strong> remember cookie consent.</li>
        <li><strong>Functionality Cookies (Persistent):</strong> store preferences like language or login details.</li>
      </ul>
      <p>See our Cookies Policy for more details.</p>

      <h2>How We Use Personal Data</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Provide, operate, and monitor the Service.</li>
        <li>Manage your Account and registration.</li>
        <li>Fulfill contracts such as purchases of goods or services.</li>
        <li>Contact you by email, phone, SMS, or push notifications for updates or security notices.</li>
        <li>Send news, offers, and information about similar products or services (unless you opt out).</li>
        <li>Respond to and manage requests or support inquiries.</li>
        <li>Evaluate business events (mergers, acquisitions, restructuring) and conduct related transfers.</li>
        <li>Perform analytics and improve our offerings.</li>
      </ul>

      <h2>When We Share Your Data</h2>
      <p>We may share your information with:</p>
      <ul>
        <li><strong>Service Providers</strong> for analytics, communications, or operational needs.</li>
        <li><strong>Affiliates</strong> who are required to follow this Privacy Policy.</li>
        <li><strong>Business partners</strong> for promotions or joint offerings.</li>
        <li><strong>Other users</strong> when you use public or social features.</li>
        <li>With your consent for other specific purposes.</li>
      </ul>

      <h2>Retention</h2>
      <p>We retain Personal Data only as long as necessary for the purposes described here, to comply with legal obligations, to resolve disputes, and to enforce agreements. Usage Data is kept for shorter periods unless needed for security or legal reasons.</p>

      <h2>Data Transfers</h2>
      <p>Your information may be processed and stored outside your jurisdiction. When transfers occur, we will take reasonable steps to ensure appropriate protections are in place and that data is handled securely and lawfully.</p>

      <h2>Data Deletion</h2>
      <p>You may delete or request deletion of Personal Data by editing your account settings (if available) or contacting us. Certain information may remain if retention is required by law.</p>

      <h2>Disclosure</h2>
      <p>We may disclose Personal Data in connection with business transactions (merger, acquisition, sale), to comply with legal requests, to protect rights or safety, or to defend legal claims.</p>

      <h2>Security</h2>
      <p>We implement commercially reasonable measures to protect your information, but no online transmission or storage method is completely secure. We cannot guarantee absolute security.</p>

      <h2>Children’s Privacy</h2>
      <p>Our Service is not intended for children under 13. We do not knowingly collect personal data from children under 13. If we learn that we have collected information from a child under 13, we will delete it promptly.</p>

      <h2>Links to Other Sites</h2>
      <p>Our Service may contain links to third-party websites. We are not responsible for their content or privacy practices; please review their privacy policies when leaving our site.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy occasionally. We will post the updated policy here and notify you via email and/or a prominent notice before changes take effect. Review this page periodically for updates.</p>

      <h2>Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at:</p>
      <p><strong>Luniva</strong><br>
         F-780, kamla nagar, Agra, Uttar Pradesh, India.</p>
    </div>`,
				}}
			/>
		</Screen>
	);
};

export default privacy;
