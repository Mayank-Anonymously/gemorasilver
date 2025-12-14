import FooterInfo from '@/component/common/FooterInfo';
import Screen from '@/component/common/Screen';
import BreadHomeBanner from '@/component/home/homebanner';

import React from 'react';
import { Container } from 'react-bootstrap';

const about = () => {
	return (
		<Screen
			title='About Us | Trusted Online Shopping Platform – Luniva Jewels'
			description='Learn about Luniva Jewels, a trusted e-commerce platform offering quality products, secure shopping, and customer-focused services.'
			canonical='https://www.lunivajewels.com/about'>
			<Container style={{ background: '#fff4f4', padding: 44, marginTop: 50 }}>
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
			<section
				className='opening-heading'
				style={{
					background: '#fff4f4',
					padding: 44,
					borderRadius: '10px',
					margin: 20,
				}}>
				<h1>Meet Our Founders</h1>
				<h4>The Story Begins with Friendship</h4>
				<p>
					Muskan Garg and Akanksha Bhardwaj were best friends long before they
					became business partners. With a shared passion for meaningful design
					and a vision to empower women, they co-founded Luniva—a jewellery
					brand that blends elegance with intention. Muskan brings thoughtful
					leadership and a structured approach to the brand’s growth, while
					Akanksha leads with creativity and a deep understanding of what
					resonates with modern women.
				</p>
				<p>
					Together, they have built Luniva not just as a brand, but as a
					celebration of strength, individuality, and friendship.
				</p>
			</section>
		</Screen>
	);
};

export default about;
