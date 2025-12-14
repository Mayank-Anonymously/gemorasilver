import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/component/redux/store';
import { ToastContainer } from 'react-toastify';

function AppContent({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	useEffect(() => {
		const disableZoom = (e) => {
			if (e.touches.length > 1) e.preventDefault();
		};
		document.addEventListener('touchmove', disableZoom, { passive: false });
		document.addEventListener('gesturestart', (e) => e.preventDefault());
		return () => {
			document.removeEventListener('touchmove', disableZoom);
			document.removeEventListener('gesturestart', (e) => e.preventDefault());
		};
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
				<ToastContainer
					position='top-right'
					theme='dark'
					autoClose={3000}
				/>
			</PersistGate>
		</Provider>
	);
}
