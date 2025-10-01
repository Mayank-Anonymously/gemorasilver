import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/component/redux/store';

function AppContent({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	// 👇 get loggedIn from redux
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		console.log('User logged in:', auth);
	}, []);

	return <Component {...pageProps} />;
}

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}>
				<AppContent
					Component={Component}
					pageProps={pageProps}
				/>
			</PersistGate>
		</Provider>
	);
}
