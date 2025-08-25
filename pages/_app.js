import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/component/redux/store';

export default function App({ Component, pageProps }) {
	useEffect(
		() =>
			AOS.init({
				duration: 1000, // optional, default is 400
				once: true, // whether animation should happen only once - while scrolling down
			}),
		[]
	);
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}
