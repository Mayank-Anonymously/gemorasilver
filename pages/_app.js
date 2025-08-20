import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
	useEffect(
		() =>
			AOS.init({
				duration: 1000, // optional, default is 400
				once: true, // whether animation should happen only once - while scrolling down
			}),
		[]
	);
	return <Component {...pageProps} />;
}
