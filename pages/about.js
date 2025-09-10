import FooterInfo from '@/component/common/FooterInfo';
import Screen from '@/component/common/Screen';
import BreadHomeBanner from '@/component/home/homebanner';
import React from 'react';
import { Container } from 'react-bootstrap';

const about = () => {
	return (
		<Screen>
			<BreadHomeBanner />
			<Container className='p-5'>
				<h1>About Us</h1>
				<p>
					At Luniva, we believe jewellery is more than an accessory — it’s an
					expression of your inner light. Inspired by the soft glow of moonlight
					("Luna") and the brilliance of lord shiva, Luniva brings you 925
					sterling silver jewellery designed for the modern, style-forward youth
					who embraces elegance with confidence. Every piece is a blend of
					timeless luxury and youthful flair, handcrafted to celebrate your bold
					spirit, your beauty, and your story. Whether you're dressing up for a
					moment or making everyday moments feel special, Luniva is your silver
					signature. Our vision is to provide you quality, authenticity, and
					effortless style, and Luniva is where desi hearts meet global shine.
					Rooted in the heart of <b>Agra – the City of the Taj</b>, our brand is
					built on the belief that elegance and affordability can go hand in
					hand.
				</p>
			</Container>
		</Screen>
	);
};

export default about;
