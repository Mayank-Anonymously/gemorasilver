import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import { wrapper, getPersistor } from '@/component/redux/store';
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

function MyApp({ Component, pageProps }) {
	const store = useStore();
	const persistor = getPersistor(store);

	// ✅ SERVER: render immediately (SSR)
	if (typeof window === 'undefined') {
		return (
			<AppContent
				Component={Component}
				pageProps={pageProps}
			/>
		);
	}

	// ✅ CLIENT: persist enabled
	return (
		<>
			<PersistGate persistor={persistor}>
				<AppContent
					Component={Component}
					pageProps={pageProps}
				/>
			</PersistGate>
			<ToastContainer
				position='top-right'
				theme='dark'
				autoClose={3000}
			/>
		</>
	);
}

export default wrapper.withRedux(MyApp);
