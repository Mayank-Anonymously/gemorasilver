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
					Gemora Silver by M & A is a refined 925 sterling silver jewellery
					brand that celebrates the strength, elegance, and individuality of
					every woman. To us, jewellery is far more than a decorative piece—it’s
					a powerful form of self-expression, confidence, and emotional
					connection. Our vision is to make timeless beauty attainable for all.
					With thoughtfully curated designs and accessible pricing, we aim to
					inspire a sense of pride and empowerment in every woman who wears
					Gemora. We recognize that every piece of jewellery carries a personal
					story, and we’re honored to be a part of yours. Blending modern
					sophistication with classic charm, Gemora Silver is crafted to reflect
					the unique beauty of every woman—because no two stories are ever the
					same. Rooted in the rich heritage of Agra, the iconic *City of the
					Taj*, we bring together tradition, craftsmanship, and contemporary
					aesthetics to deliver jewellery that speaks from the heart.
				</p>
				<section>
					<FooterInfo />
				</section>
			</Container>
		</Screen>
	);
};

export default about;
