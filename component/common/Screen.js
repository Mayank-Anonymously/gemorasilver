import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from './Seo';

const Screen = ({ children, title, description, canonical, image }) => {
	return (
		<>
			<Seo
				title={title}
				description={description}
				canonical={canonical}
			/>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Screen;
